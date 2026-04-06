# Physical Experiment System Overview

## 1. Project Overview

This project aims to build an integrated experiment system combining sample processing and data recording, designed to support the doctoral research of Dr. Lukas. The system comprises an industrial control computer, a drilling platform, a 2D slideway, pressure sensors, a torque sensor, an infrared thermal imager, and a dial indicator. It is primarily used to record pressure, torque, temperature, and deformation data generated during wood processing under various conditions. The entire project — except for certain hardware procurement — was completed solely by Peler. The system has been in stable operation for over four months, supporting dozens of experimental sample processing and data recording sessions.

## 2. Project Highlights

**Integration**: All components are connected to the industrial control computer for unified control and coordination, providing a one-stop solution for experimental sample processing and data acquisition.

**Ease of Use**: All functions are delivered with out-of-the-box graphical user interfaces (including a graphical slideway programming system), combined with user manuals to minimize the learning curve.

**Low Cost**: Most components in the system are second-hand. While this increased development difficulty due to limited documentation, it significantly reduced costs.

**Maintainability**: Each module of the system is clearly labeled, with detailed development records covering wiring methods and common issues, enabling technicians to perform quick inspections and maintenance.

**Stability**: The system has been in stable operation for over four months, successfully withstanding high-vibration and high-dust environments while supporting dozens of experiments.

## 3. Project Background

In Dr. Lukas's doctoral research, it is necessary to study the effects of different wood processing methods on the overall structural stability of wood. Therefore, an integrated wood processing and data recording system is essential. The drilling platform and the accompanying 2D slideway system enable precise control over the drilling position on the wood. Pressure and torque sensors mounted on the slideway platform provide real-time data recording for subsequent mathematical analysis. In addition, the infrared thermal imager and dial indicator can collect corresponding data when needed, providing infrared thermal image analysis and real-time displacement recording. Due to the originality of the experiments, no mature off-the-shelf system solution is currently available on the market. Furthermore, due to budget constraints, most equipment is second-hand, presenting challenges such as missing documentation and lack of technical support. Successfully driving each component of the experiment system and ultimately integrating them into an industrial control system — enabling collaboration between the drilling platform and the 2D slideway, and achieving real-time aggregation of sensor data — are the key challenges this project needed to overcome.

## 4. Requirements Analysis

### Industrial Control Computer

- **Software requirements**: A stable Windows 10 distribution.
- **Hardware requirements**: At least 4 GB of RAM to run multiple experiment software simultaneously, and a reasonably modern CPU to handle the computational demands of infrared thermal image analysis.

### Drilling Platform

- **Software requirements**: None; a built-in control system is provided, but processing data must be measured and calculated for each session.
- **Hardware requirements**: The drill bit height must be adjusted to leave sufficient clearance for the 2D slideway.

### 2D Slideway

- **Software requirements**: Time-division control of different motors via a USB-to-serial converter to achieve synchronized and precise motor movement, with the corresponding functionality encapsulated as an API.
- **Hardware requirements**: Ensure stable wiring and overall slideway structure, capable of withstanding prolonged high-intensity vibration and heavy dust from transportation and the drilling platform.
- **User requirements**: Design an intuitive graphical user interface that allows non-technical users to quickly master slideway programming and control.

### Pressure Sensors

- **Software requirements**: The manufacturer provides a hardware acquisition unit and host software, but technical support is difficult to reach and the device model does not match the actual hardware.
- **Hardware requirements**: Four pressure sensors and the manufacturer's matching acquisition unit, but the wiring is disorganized and unusable, with no accessible documentation.
- **User requirements**: Provide ready-to-use host software for real-time data transmission, display, and recording.

### Torque Sensor

- **Software requirements**: The manufacturer provides host software, but technical support is difficult to reach.
- **Hardware requirements**: Requires a dedicated 220V power supply; otherwise connects directly to the computer via USB with no additional configuration.
- **User requirements**: Provide ready-to-use host software for real-time data transmission, display, and recording.

### Infrared Thermal Imager

- **Software requirements**: The device has a built-in LAN transfer function, but it is unavailable due to a lost administrator password (second-hand unit), requiring an alternative data transfer method.
- **Hardware requirements**: Since LAN connection is unavailable, a USB-C cable must be used; given the actual setup, the cable must be long enough.
- **User requirements**: Provide ready-to-use host software for real-time infrared thermal image transfer and recording, with support for temperature data analysis at specific points.

### Dial Indicator

- **Software requirements**: The manufacturer provides clear documentation and paid software; due to budget constraints, custom software must be developed.
- **Hardware requirements**: Requires an additional USB-to-serial converter to connect the manufacturer's decoder to the dial indicator.
- **User requirements**: Provide ready-to-use host software for real-time data transmission and display, with particular emphasis on high-frequency reading and corresponding timestamp recording for later data integration.

## 5. System Components

**2D Schematic Diagram**:

<div style="text-align:center;"><img src="./ExperimentSystem.assets/system.png" style="width:50%;" /></div>

## 6. Project Showcase

Due to copyright considerations, this section only showcases software or hardware wiring independently developed by Peler.

### Industrial Control Computer System

<div style="text-align:center;"><img src="./ExperimentSystem.assets/image-20251206202253490.png" alt="image-20251206202253490" style="width:50%;" /></div>

A complete integrated experiment and processing system. Includes all host software and required data analysis tools, with shortcuts to common system management utilities. At the OS level, Windows 10 Enterprise 2021 LTSC is used, deeply optimized via scripts — system updates and other services are disabled to ensure a stable, unchanging environment. See: [Industrial Control Computer System](./IndustrialControlComputerSystem_en.md).

### 2D Slideway Modular Programming Control System

<div style="text-align:center;"><img src="./ExperimentSystem.assets/image-20251205164505709.png" alt="image-20251205164505709" style="width:50%;" /></div>

A zero-learning-curve modular programming system. Supports console output, loop statements, conditional statements, variables and functions, as well as slideway operations including initialization, homing, precise movement, and speed-based movement. See: [2D Slideway Modular Programming Control System](./SlidewayControlSystem_en.md).

### Infrared Thermal Image Real-Time Transfer and Analysis System

<div style="text-align:center;"><img src="./ThermalImageAnalysisSystem.assets/image-20260407021750202.png" alt="image-20260407021750202" style="width:50%;" /></div>

A streamlined and easy-to-use infrared thermal imaging software. Supports real-time transfer and recording of infrared thermal video from the device, video analysis to extract temperature values at the center point and three user-defined points per frame, and saving of both video and analysis results. See: [Infrared Thermal Image Real-Time Transfer and Analysis System](./ThermalImageAnalysisSystem_en.md).

### Dial Indicator Real-Time Data Acquisition and Recording System

<div style="text-align:center;"><img src="./ExperimentSystem.assets/image-20260407015618822.png" style="width:50%;" /></div>

A powerful dial indicator data reading software with all the features required for experiments. Supports automatic baud rate detection and matching, dynamic data reading with real-time chart display, and data export. See: [Dial Indicator Real-Time Data Acquisition and Recording System](./DialIndicatorSystem_en.md).

## 7. Overall Implementation and Design Challenges

**Design challenges**: The overall system contains many components but the available space is limited. Arranging the limited space to ensure system stability, safety, and usability is a major challenge.

**Engineering challenges**: The limited space makes transporting and assembling large items such as the 2D slideway, drilling platform, and workbench difficult. The drilling platform requires a special high-power outlet and additional grounding.

**Requirements challenges**: Ensuring the maintainability of the system while keeping it compact overall; the entire system must withstand the high-vibration, high-dust environment generated by the drilling platform for long-term stable operation.

**Maintenance challenges**: Some components (e.g., pressure sensors, 2D slideway) have complex wiring that must be labeled for future inspection and maintenance.

**Software challenges**: Ensuring the stability and compatibility of the system and all software, debugging each device, pre-configuring fixed parameters, and minimizing the user learning curve as much as possible.

## 8. Project Outcomes

To date, this project has been formally deployed and in operation in the experimental environment for over four months, running stably and supporting dozens of experimental sample fabrication and data recording sessions. According to the most recent inspection, no issues or potential hazards were found after three months of use; all components are functioning properly and have withstood the high-vibration and high-dust environment.

## 9. Personal Contributions

**Hardware procurement**: Industrial control computer system, workbench, lab power supply, cables, and required USB-to-serial converters.

**Software development**: Overall industrial control computer system, 2D slideway modular programming control system, infrared thermal image real-time transfer and analysis system, dial indicator real-time data acquisition and recording system.

**Installation and testing**: Workbench, industrial control computer system, torque sensor, pressure sensors, 2D slideway, infrared thermal imager, dial indicator.

**Miscellaneous**: Overall system layout design and installation, periodic system inspection and maintenance, writing development documentation and user manuals.

## 10. Development Gallery

<div style="text-align:center;"><img src="./ExperimentSystem.assets/image-20251207175325077.png" alt="image-20251207175325077" style="width:33%;" /></div>

<center>It's always a mess at the beginning $#&</center>
<br />

<div style="text-align:center;"><img src="./ExperimentSystem.assets/71074a0ef4a581ed09c7efd27ff8b435.jpg" alt="71074a0ef4a581ed09c7efd27ff8b435" style="width:25%;" /></div>

<center>This hardware doesn't look open-source...</center>
<br />

<div style="text-align:center;"><img src="./ExperimentSystem.assets/image-20251207175453683.png" alt="image-20251207175453683" style="width:33%;" /></div>

<center>Taking a break — might as well listen to some music while installing the OS</center>
<br />

<div style="text-align:center;"><img src="./ExperimentSystem.assets/dcf64484a6c90d2b0af9f955a0745be8.jpg" alt="dcf64484a6c90d2b0af9f955a0745be8" style="width:33%;" /></div>

<center>Glasses or sunglasses?</center>
<br />
