# Dial Indicator Data Acquisition and Recording System

This project is part of the [Physical Experiment System](./experiment-system).

## Overview

A complete desktop host application for digital dial indicators in laboratories and industrial settings. Traditional measurement relies on manual recording, which is slow and error-prone. This project implements a general-purpose acquisition application based on the Modbus RTU protocol: users can connect to the device, detect the baud rate automatically, take single or continuous readings, watch the waveform live and export the data in several formats through a graphical interface, without writing any serial-communication scripts.

<figure class="w-100">
  <img src="./assets/dial-indicator-ui.webp" alt="Dial indicator acquisition software with connection settings, control buttons, a live displacement plot and a data table" />
  <figcaption>The dial indicator software (click to enlarge)</figcaption>
</figure>

Main features:

- **Automatic connection**: scans serial ports and matches the baud rate automatically, with no manual configuration.
- **Live visualisation**: a high-performance plotting component draws the displacement curve in real time.
- **Data export**: export measurements to CSV, an Excel report or a SQLite database in one click.

## Background

The physical experiment system must measure the tiny displacements of a sample during machining, which calls for a dial indicator. The indicator that was purchased only has a basic RS-485 hardware interface and no host software. Experimenters had to copy readings by hand, or read raw hexadecimal data in a crude serial-debugging tool, which is slow and makes trends such as jitter and rebound hard to see. This project fills that gap.

## Requirements

**Functional**

- **Device control**: RS-485 serial connection, and zeroing the device.
- **Data acquisition**: single manual reads and continuous automatic reads at a user-defined rate.
- **Visualisation**: a scrolling displacement-over-time plot and a table of historical data.
- **Persistence**: export to Excel, CSV or SQLite.
- **Usability**: automatic baud-rate detection to lower the bar for hardware configuration.

**Non-functional**

- **Responsiveness**: the UI must not stutter or freeze during high-frequency serial communication (this requires a multi-threaded design).
- **Stability**: serial packet loss, checksum errors and similar faults must be handled without crashing.
- **Compatibility**: runs mainly on Windows and must be packaged as a standalone executable.

## Development Workflow

<Diagram name="flow-dial" caption="Development workflow of the dial indicator software" wide />

## Technology

| Layer | Technology |
|---|---|
| **Hardware control** | Python + pyserial for Modbus RTU serial communication |
| **Desktop front end** | Python + PyQt5 for the graphical interface and live waveform |
| **Data back end** | Python + pandas / sqlite3 for statistics and multi-format export |

## Implementation Challenges

### Hardware

| Area | Challenge |
|---|---|
| **Development** | The indicator uses Modbus RTU, so command framing, CRC16 checksums and 32-bit big-endian data decoding had to be implemented by hand |
| **Engineering** | Baud-rate settings differ between devices and are unknown, so the handshake and connection had to be established without documentation or a known configuration |
| **Requirements** | Continuous acquisition above 10 Hz needs precise timing: commands must not pile up and cause bus collisions, and packet loss and similar faults must be handled |

### Software

| Layer | Challenge |
|---|---|
| **Hardware control** | Baud-rate auto-matching; dynamic calculation of the minimum safe read interval; a multi-threaded serial guard; disconnection detection and automatic reconnection |
| **Desktop front end** | A non-blocking multi-threaded UI built on QThread; live waveform rendering with PyQtGraph; cross-thread signals and slots |
| **Data back end** | Business logic decoupled with MVC; lightweight SQLite storage; automated statistics and Excel report generation with pandas |

## User Interface

| Region | Description |
|---|---|
| **Connection settings** | Port selection (auto-refreshing) and baud rate; an "Auto-detect" button adapts to the device in one click |
| **Controls** | Large "Single read", "Continuous read" (with a custom interval), "Stop" and "Zero" buttons to prevent mis-taps |
| **Live plot** | A PyQtGraph-based chart that supports scroll-wheel zoom, drag to review history and automatic Y-axis range |
| **Data table** | Live time-and-value pairs, sortable by column header |
| **Menu bar** | Export options for CSV, Excel and SQLite |

## Results

The software has been packaged as a Windows installer and distributed, and runs reliably on several computers in the experimental environment. It samples smoothly at more than 10 Hz, and in continuous tests lasting several hours showed no memory leaks or serial-port crashes. The exported Excel reports are used directly in later analysis of the experimental data, which has noticeably improved efficiency.

## Personal Contributions

This project was designed and developed independently by Peler, apart from procuring the dial indicator.

| Area | Scope |
|---|---|
| **Architecture** | Designed the PyQt5-based MVC architecture, decoupling the UI from business logic |
| **Driver** | Wrote the `GaugeReader` class, implementing Modbus RTU framing and CRC checking by hand |
| **Core features** | The multi-threaded continuous-acquisition algorithm, the baud-rate auto-detection algorithm and the SQLite / Excel export module |
| **Interface** | Designed the UI in Qt Designer and wrote the PyQtGraph live-plotting logic |
| **Packaging** | Configured the PyInstaller spec file and wrote the Inno Setup script that builds the installer |
