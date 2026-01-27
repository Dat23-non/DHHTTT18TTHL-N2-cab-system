# 🚕 CAB BOOKING SYSTEM  
**Microservices-based, Event-driven & Real-time Ride Hailing Platform**

---

## 📌 Project Overview

This project presents the **analysis, design, and implementation** of a modern **Cab Booking System** built on a **Microservices architecture**, aiming to address challenges of:

- Scalability  
- Reliability  
- Real-time processing  
- Fault tolerance  

The system follows **cloud-native principles**, is deployed on **multiple virtual machines**, and leverages **event-driven communication** to decouple services and improve resilience.

This project simulates how large-scale ride-hailing platforms (e.g., **Grab, Uber**) handle **high-concurrency booking requests** and **real-time trip updates**.

📚 **Academic usage**:
- System Architecture Design
- Distributed Systems / Big Data
- Microservices & Cloud-native demonstration

---

## 🎯 Project Objectives

- Design a distributed Cab Booking System using **Microservices**
- Implement **event-driven communication**
- Support **real-time trip status updates**
- Ensure **horizontal scalability & fault isolation**
- Deploy services across **multiple Virtual Machines**
- Apply **industry-standard architectural patterns**

---

## 🧩 System Scope (MVP)

The **Minimum Viable Product (MVP)** focuses on core ride-hailing features:

- User & Driver authentication
- Cab booking request creation
- Driver matching (rule-based)
- Trip lifecycle management
- Real-time trip status notification
- Basic monitoring & logging

❗ **Excluded (intentionally)**:
- Payment processing
- AI pricing
- Route optimization

---

## 🏗️ Overall System Architecture

The system adopts a **Microservices + Event-driven architecture**, where each service is independently deployable and scalable.

### 🔹 High-level Architecture

---

## 🖥️ Deployment Architecture (Multi-VM)

The system is deployed across multiple **Virtual Machines (VMs)** to simulate a real-world distributed environment.

| VM | Responsibility |
|----|---------------|
| VM1 | API Gateway + Authentication Service |
| VM2 | Booking Service |
| VM3 | Driver Service & Matching Engine |
| VM4 | Message Broker (Kafka / RabbitMQ) |
| VM5 | Trip Service + WebSocket Server |
| VM6 (Optional) | Monitoring & Logging (Prometheus, Grafana, ELK) |

✅ Benefits:
- Clear service isolation  
- Independent scalability  
- Fault containment  

---

## 🔄 Core Workflow (Event-driven)

### 1️⃣ Cab Booking
- User sends a booking request via REST API
- Booking Service validates and creates booking
- Event **BOOKING_CREATED** is published

### 2️⃣ Driver Matching
- Driver Service consumes **BOOKING_CREATED**
- Rule-based matching selects a driver
- Event **DRIVER_ASSIGNED** is published

### 3️⃣ Real-time Trip Updates
- Trip Service consumes assignment events
- Trip status is updated
- Updates pushed to client via **WebSocket**

---

## ⚙️ Technology Stack

### Backend
- Node.js
- Express.js
- RESTful APIs
- gRPC (design-ready)

### Frontend
- React.js
- Tailwind CSS

### Event-driven & Messaging
- Apache Kafka **or** RabbitMQ

### Real-time Communication
- WebSocket (Socket.IO)

### Deployment & Infrastructure
- Docker
- Virtual Machines
- (Optional) Kubernetes / Terraform *(design-level)*

### Security
- JWT-based authentication
- API Gateway enforcement
- Zero Trust Architecture *(conceptual)*

### Monitoring & Logging
- Prometheus & Grafana
- ELK Stack *(conceptual / partial)*

---

## 📈 Big Data & Scalability Perspective

Although the MVP is lightweight, the system reflects **Big Data design principles**:

- High-volume booking events via streaming
- Asynchronous event processing
- Decoupled services for scalability

🔮 Ready for future extensions:
- AI-based driver matching
- Demand prediction
- Dynamic pricing

---

## ✅ Key Architectural Benefits

- **Scalable** – Services scale independently  
- **Resilient** – Service failures are isolated  
- **Real-time** – Instant trip updates  
- **Cloud-ready** – Containerized & VM-based  
- **Maintainable** – Clear separation of concerns  

---

## 📁 Project Structure

cab-booking-system/
├── docs/ # Documentation
│ ├── architecture/
│ ├── sequence/
│ └── deployment/
│
├── gateway-service/ # VM1 - API Gateway
│ ├── src/
│ │ ├── index.js
│ │ ├── routes.js
│ │ └── auth.middleware.js
│ └── Dockerfile
│
├── auth-service/ # VM1 - Authentication
│ ├── src/
│ │ ├── auth.controller.js
│ │ ├── auth.service.js
│ │ └── jwt.util.js
│ └── Dockerfile
│
├── booking-service/ # VM2 - Booking
│ ├── src/
│ │ ├── booking.controller.js
│ │ ├── booking.service.js
│ │ └── booking.model.js
│ └── Dockerfile
│
├── driver-service/ # VM3 - Driver & Matching
│ ├── src/
│ │ ├── driver.controller.js
│ │ └── matching.service.js
│ └── Dockerfile
│
├── trip-service/ # VM5 - Trip & Realtime
│ ├── src/
│ │ ├── trip.controller.js
│ │ ├── trip.service.js
│ │ └── websocket.js
│ └── Dockerfile
│
├── message-broker/ # VM4 - Kafka / RabbitMQ
│ └── docker-compose.yml
│
├── frontend/ # React Client
│ ├── src/
│ └── tailwind.config.js
│
└── docker-compose.yml # Local MVP Demo
├── docker-compose.yml       # Chạy local
└── README.md
