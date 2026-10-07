---
layout: home
title: 实验系统

hero:
  name: 物理实验系统
  text: 加工与测量，一个工位完成
  tagline: 为一项木材力学博士课题，将钻机、二维滑轨与四路传感器统一接入一台工控机。由一人独立设计、搭建并维护。
  image:
    src: /hero-system.png
    alt: 系统布局示意图
  actions:
    - theme: brand
      text: 系统总览
      link: /zh/experiment-system
    - theme: alt
      text: 浏览子系统
      link: /zh/slideway

features:
  - icon: 🖥️
    title: 工控计算机系统
    details: 一台 LTSC 工作站统一运行所有仪器，针对多灰尘、强振动的车间环境做了加固。
    link: /zh/industrial-computer
    linkText: 了解更多
  - icon: 🧩
    title: 二维滑轨编程控制
    details: 基于 Blockly 的网页积木式编程环境，让没有编程基础的人也能精确驱动二维电机滑轨。
    link: /zh/slideway
    linkText: 了解更多
  - icon: 🌡️
    title: 红外热图分析
    details: 通过 USB 实时传输红外热图，H.264 录制，并逐帧提取温度数据，不依赖厂商软件。
    link: /zh/thermal-imaging
    linkText: 了解更多
  - icon: 📏
    title: 千分表数据采集
    details: 基于 PyQt5 的 Modbus RTU 上位机，支持波特率自动检测、实时绘图及 CSV/Excel/SQLite 导出。
    link: /zh/dial-indicator
    linkText: 了解更多
---
