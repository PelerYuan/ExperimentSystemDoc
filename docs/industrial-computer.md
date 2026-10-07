# Industrial Control Computer System

This project is part of the [Physical Experiment System](./experiment-system).

## Overview

A hardware and software solution that connects to and controls all the hardware in the physical experiment system, so that experimenters can operate equipment, monitor its state, and collect and analyse data from a single computer.

<figure class="w-70">
  <img src="./assets/workstation-desktop.webp" alt="Desktop of the industrial control computer, showing the experiment-and-processing wallpaper and shortcuts to common tools" />
  <figcaption>Desktop of the industrial control computer (click to enlarge)</figcaption>
</figure>

## Background

The original design of the physical experiment system had no industrial control computer: a laptop was connected to the required devices before each experiment. In practice this caused several problems: there was nowhere to put the laptop, hardware connections and software configuration were tedious, and it was hard to write up experiment records.

The revised design therefore added an industrial control computer, giving a stable hardware setup that does not have to be changed or reconfigured. The workbench designed alongside it also provides a surface for writing records and for tools.

## Requirements

**Functional**

- Enough hardware performance to run several experiment programs at the same time
- Enough USB ports to connect every device

**Non-functional**

- A case of suitable size; it sits on the workbench to keep dust out, so its size is tightly limited
- Low cost, within a tight budget
- Cooling and other stability measures that allow 24/7 operation

## Development Workflow

<Diagram name="flow-ipc" caption="Development workflow of the industrial control computer system" />

## Technology

| Aspect | Choice |
|---|---|
| **Operating system** | Windows 10 Enterprise 2021 LTSC |
| **System tuning** | [Chris Titus Tech's WinUtil](https://github.com/ChrisTitusTech/winutil): disables non-essential services and pauses system updates |

## Implementation Challenges

| Area | Challenge |
|---|---|
| **Development** | The budget meant using cheap second-hand hardware, so lifespan and compatibility had to be ensured |
| **Engineering** | Finding suitable second-hand hardware is hard: price and performance must be weighed and counterfeits spotted |
| **Requirements** | The case sits on the workbench to keep dust out, so its size is strictly limited |
| **Software** | Some second-hand lab devices have no documentation or manual, so errors had to be resolved from experience |

## Results

The system is deployed in the real experimental environment as part of the physical experiment system (for how long, see the [overview](./experiment-system#project-outcomes)). The most recent inspection confirmed that all functions were still working after three months of use in a high-vibration, high-dust environment. Users report a clear improvement in usability over the original setup, more convenient data collection and recording, and a more orderly lab.

## Personal Contributions

This project was completed entirely by Peler.

| Area | Scope |
|---|---|
| **Hardware** | Procuring, assembling and debugging the computer hardware |
| **Software** | Obtaining, installing and configuring software; installing and tuning the operating system |
| **Integration** | Planning the workbench layout, placing the computer and setting up the monitor, keyboard and mouse |
