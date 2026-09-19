
# 🚧 Mine Vehicle Safety Monitoring System

## 🔗 Live Demo

**Mine Vehicle Safety Monitoring Dashboard:**
[https://sabari1719s.github.io/MineSafetyDashboard/](https://sabari1719s.github.io/MineSafetyDashboard/)

---

## 📌 Project Overview

The **Mine Vehicle Safety Monitoring System** is a real-time safety monitoring solution designed to improve the safe operation of vehicles in **open-pit mines**, especially during **fog, dust, and low-visibility conditions**.

The system combines multiple sensing technologies with a centralized monitoring dashboard to detect nearby vehicles and obstacles, monitor vehicle conditions, identify potential collision risks, and provide timely alerts to operators and mine-control personnel.

---

## 🎯 Problem Statement

Mining vehicles operate in challenging environments where **fog, dust, poor visibility, and large blind spots** can increase the risk of:

* Vehicle-to-vehicle collisions
* Vehicle-to-obstacle collisions
* Delayed hazard detection
* Communication failures
* Unsafe vehicle operation
* Accidents caused by reduced visibility

Conventional visual monitoring systems may become less effective under severe environmental conditions.

---

## 💡 Proposed Solution

The proposed system provides a **multi-sensor safety monitoring framework** that continuously collects vehicle and environmental information.

### Main Functions

* Real-time vehicle monitoring
* Obstacle detection
* Low-visibility safety monitoring
* Collision-risk identification
* Warning and alert generation
* Vehicle sensor-health monitoring
* Communication-status monitoring
* Centralized safety dashboard
* Historical alert and trend monitoring

---

## ⚙️ System Architecture

```text
                    MINE VEHICLES
                         │
                         ▼
              ┌─────────────────────┐
              │  Sensor Data Input   │
              └──────────┬──────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
      Radar            LiDAR           Thermal
        │                │                │
        └────────────────┼────────────────┘
                         ▼
              ┌─────────────────────┐
              │ Data Processing &   │
              │ Safety Assessment   │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │ Collision Risk      │
              │ Detection           │
              └──────────┬──────────┘
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
       Warning / Alert          Central Dashboard
                                     │
                                     ▼
                              Mine Control Room
```

---

## 🔍 Sensor Technologies

### 📡 FMCW Radar

Used to detect:

* Nearby vehicles
* Obstacles
* Relative distance
* Movement information

Radar can continue operating in conditions where visibility is reduced.

### 🔭 LiDAR

Used for:

* Distance measurement
* Object detection
* Environmental mapping
* Vehicle/obstacle localization

### 🌡️ Thermal Camera

Used to identify:

* Vehicles
* Human presence
* Objects based on thermal signatures

Thermal sensing can provide additional information during low-light and foggy conditions.

---

## 🖥️ Monitoring Dashboard

The dashboard provides centralized visibility of mine vehicles and their safety status.

### Dashboard Features

* 🚛 Vehicle status
* 📍 Vehicle location
* ⚠️ Safety alerts
* 📡 Sensor status
* 🔗 Communication status
* 📊 Risk trends
* 🚨 Collision warnings
* 📋 Alert history

---

## 🔄 Working Flow

```text
START
  ↓
Pre-Operation Vehicle Check
  ↓
Initialize Vehicle
  ↓
Real-Time Sensor Data Acquisition
  ↓
Radar + LiDAR + Thermal Data
  ↓
Data Processing
  ↓
Object / Vehicle Detection
  ↓
Distance & Risk Assessment
  ↓
Is Collision Risk Detected?
       ↓
   ┌───Yes───┐
   ↓         ↓
Generate   Notify
Alert      Operator
   ↓
Dashboard Update
   ↓
Continue Monitoring
```

---

## 🚨 Fault Detection

The system continuously monitors the health of connected sensors and communication links.

Potential faults include:

* Sensor failure
* Sensor disconnection
* Communication loss
* Abnormal sensor readings
* Vehicle monitoring failure

When a fault is detected, the dashboard can indicate the affected vehicle or sensor so that the responsible maintenance/operator team can take corrective action.

---

## 📊 Dashboard Monitoring

The system can monitor each vehicle using parameters such as:

| Parameter     | Purpose                     |
| ------------- | --------------------------- |
| Vehicle ID    | Identifies the vehicle      |
| Location      | Tracks vehicle position     |
| Speed         | Monitors vehicle movement   |
| Distance      | Measures nearby objects     |
| Risk Level    | Determines safety condition |
| Sensor Status | Checks sensor health        |
| Communication | Checks connectivity         |
| Alert Status  | Displays active warnings    |

---

## 🌫️ Low-Visibility Operation

The system is particularly intended for mine environments affected by:

* Fog
* Dust
* Smoke
* Night-time operation
* Reduced visibility

Using multiple sensing technologies provides a more reliable safety-monitoring approach than depending only on conventional visual observation.

---

## 📈 Scalability

The proposed system can be scaled according to mine size.

```text
Pilot Deployment
      ↓
5 Vehicles
      ↓
10–20 Vehicles
      ↓
Full Mine Fleet
      ↓
Multiple Mining Zones
```

The architecture can support additional vehicles, sensors, monitoring stations, and future communication technologies.

---

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript
* Responsive Dashboard UI

### Monitoring & Visualization

* Real-time dashboard
* Vehicle status indicators
* Alert monitoring
* Risk visualization
* Data trend visualization

### Proposed Hardware

* FMCW Radar
* LiDAR
* Thermal Camera
* GPS
* ESP32 / Embedded Controller
* Wireless Communication Module

### Communication

* Wi-Fi
* MQTT
* Wireless sensor communication
* Central monitoring communication

---

## 🌐 Live Web Application

The working dashboard is available here:

**[https://sabari1719s.github.io/MineSafetyDashboard/](https://sabari1719s.github.io/MineSafetyDashboard/)**

---

## 🎯 Applications

The system can be applied to:

* Open-pit mining
* Underground mining
* Heavy mining vehicle monitoring
* Low-visibility vehicle operation
* Mine traffic management
* Industrial vehicle safety
* Hazard detection systems

---

## ⭐ Key Advantages

* Real-time safety monitoring
* Multi-sensor detection
* Improved low-visibility awareness
* Early collision-risk warning
* Centralized vehicle monitoring
* Sensor-health monitoring
* Scalable architecture
* Suitable for large mining fleets

---

## 🔮 Future Enhancements

Future versions can include:

* AI-based collision prediction
* Automatic emergency braking
* Edge computing
* 5G/6G communication
* Autonomous mining vehicle integration
* Predictive maintenance
* Digital twin integration
* Advanced mine traffic optimization
* Voice-based emergency alerts
* Cloud-based fleet analytics

---

## 👥 Project Team

**Project:** Mine Vehicle Safety Monitoring System

**Domain:** Mining Safety & Intelligent Transportation

**Focus Areas:**

* Embedded Systems
* IoT
* Sensor Fusion
* Real-Time Monitoring
* Industrial Safety
* Intelligent Vehicle Systems

---

## 📄 Project Purpose

This project demonstrates a **software-based working model and proposed system architecture** for improving mining vehicle safety under fog and low-visibility conditions.

The dashboard serves as a centralized interface for monitoring vehicle conditions, sensor status, safety risks, and alerts.

---

