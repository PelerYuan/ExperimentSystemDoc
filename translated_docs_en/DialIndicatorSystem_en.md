# Dial Indicator Data Real-Time Acquisition and Recording System Overview

## 1. Project Overview

This project is a component of the Physical Experiment System.

This project aims to provide a complete desktop-side host software solution for digital dial indicators used in laboratory and industrial environments. To address the inefficiency and error-proneness of manual data recording in traditional measurements, this project implements a universal data acquisition software based on the Modbus RTU protocol. Users can quickly connect devices, automatically detect baud rates, perform single or continuous data acquisition, visualize real-time waveforms, and export data in multiple formats through an intuitive graphical interface, without writing any serial communication scripts.

## 2. Project Highlights

This project provides a modern, highly responsive GUI. Key highlights include:

- **Smart Connection**: Supports automatic serial port scanning and baud rate matching without complex manual configuration.
- **Real-Time Visualization**: Integrates a high-performance plotting component capable of rendering displacement curves in real time with millisecond precision.
- **Data Export**: Supports one-click export of measurement data to CSV, Excel reports, or SQLite database files.

## 3. Project Background

In the Physical Experiment System, measuring the minute displacement generated during sample processing is essential, making the dial indicator indispensable. However, the purchased dial indicator only provides a basic RS-485 interface and lacks supporting host-side software. Experimenters often manually transcribe readings or rely on rudimentary serial debugging tools to view raw hexadecimal data, which is inefficient and makes it difficult to observe displacement trends such as jitter or rebound. This project was developed to fill this gap.

## 4. Requirements Analysis

**Functional Requirements:**

- Device control via RS-485 serial connection and zeroing operation.
- Single manual read and configurable-frequency continuous acquisition.
- Real-time displacement-time curve visualization and historical data listing.
- Data export to Excel, CSV, or SQLite formats.
- Automatic baud rate detection for ease of use.

**Non-Functional Requirements:**

- High responsiveness with no UI freezing under high-frequency communication (multi-threaded design required).
- Stability under packet loss and checksum errors.
- Compatibility with Windows and packaging as a standalone executable.

## 5. Development Workflow

(omitted diagram)

## 6. Tech Stack

Hardware control: Python + pyserial for Modbus RTU communication  
Frontend: Python + PyQt5 for GUI and plotting  
Backend: Python + pandas/sqlite3 for data processing and export

## 7. Implementation Challenges

Hardware: Modbus RTU implementation, CRC16, 32-bit big-endian parsing  
Engineering: Unknown baud rate auto-detection  
Requirements: High-frequency (>10Hz) acquisition timing control  

Software: Multi-threading, UI responsiveness, SQLite + pandas integration

## 8. UI & UX

Includes connection config, control panel, real-time chart, data table, and export menu.

## 9. Outcomes

Successfully deployed and stable across multiple machines, supporting long-duration (>hours) acquisition at >10Hz without crashes or memory leaks.

## 10. Personal Contribution

Fully designed and implemented by Peler, including architecture, driver development, multi-threading, UI, and packaging.
