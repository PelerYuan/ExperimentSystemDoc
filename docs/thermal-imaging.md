# Infrared Thermal Image Transfer and Analysis System

This project is part of the [Physical Experiment System](./experiment-system).

## Overview

A simple companion application for the infrared thermal imager. It streams and records thermal images in real time, analyses the temperature at specific points in the image, and exports the data to support later theoretical analysis.

<figure class="w-70">
  <img src="./assets/thermal-imaging-ui.webp" alt="Thermal-image software: control window on the left, live thermal preview on the right with the centre point and three measurement points P1 to P3 marked" />
  <figcaption>The thermal-image software (click to enlarge)</figcaption>
</figure>

The workflow is reduced to the minimum: capture, analysis and export all happen in one clean interface, so users can do everything without extra training.

## Background

The physical experiment system needs to record how the temperature at specific points on the workpiece changes during particular machining operations, so a system that can transfer and record thermal images is required.

The thermal imager has a built-in LAN transfer function, but the second-hand unit's administrator password was lost and the function is unusable, so images have to be transferred over a USB-C cable instead. That raised two problems: how to save the live thermal images and encode them into a usable video format, and how to read the temperature at specific points from the thermal image.

## Requirements

**Functional**

- Real-time thermal image transfer and display
- Encoding and saving of the thermal video stream
- Temperature analysis at specific points
- Export of analysis data and video

**Non-functional**

- Minimal hardware configuration effort: plug and play
- A clean interface

## Development Workflow

<Diagram name="flow-thermal" caption="Development workflow of the thermal image system. The built-in LAN transfer was unavailable, so custom software was developed." wide />

## Technology

| Aspect | Technology |
|---|---|
| **Video stream encoding** | Multi-threaded calls to FFmpeg to capture the stream and encode it as H.264 |
| **Thermal image analysis** | OpenCV + Pillow to crop image regions, with ddddocr to recognise temperature values |
| **GUI** | Python's standard Tkinter library for the desktop control window and interaction logic |

## Implementation Challenges

| Area | Challenge |
|---|---|
| **Development** | The second-hand imager's model was unclear and documentation was missing |
| **Requirements** | Writing software to read the thermal image in real time had no vendor support and no reference projects, so it relied entirely on experimentation |
| **Engineering** | Keeping analysis accurate in a varied environment, limiting resource use, and handling events such as the imager disconnecting |

## Results

The system is deployed in the real experimental environment as part of the physical experiment system (for how long, see the [overview](./experiment-system#project-outcomes)). The most recent inspection confirmed that all functions were still working after three months in a high-vibration, high-dust environment. Users report that the interface is intuitive and concise and covers all functional requirements.

## Personal Contributions

This project was completed by Peler, apart from procuring the thermal imager.

| Area | Scope |
|---|---|
| **Hardware** | Trial and error to learn how to use the thermal imager and configure its parameters |
| **Software** | Video stream transfer and encoding, thermal image analysis and data export |
| **Integration** | Developing and testing the software, writing documentation |
