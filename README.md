🚕 CAB BOOKING SYSTEM

Microservices-based, Event-driven & Real-time Ride Hailing Platform

📌 Project Overview

This project presents the analysis, design, and implementation of a modern Cab Booking System built on a Microservices architecture, aiming to address the challenges of scalability, reliability, real-time processing, and fault tolerance in ride-hailing platforms.

The system is designed following cloud-native principles, deployed on multiple virtual machines, and leverages event-driven communication to decouple services and improve system resilience.
It demonstrates how large-scale ride-hailing systems (e.g., Grab, Uber) handle high-concurrency requests and real-time trip updates.

This project is developed as an academic system design & implementation project, suitable for:

System Architecture Design documentation

Big Data / Distributed Systems coursework

Microservices & Cloud-native demonstration

🎯 Project Objectives

Design a distributed Cab Booking System using Microservices

Implement event-driven communication for asynchronous processing

Support real-time trip status updates

Ensure horizontal scalability and fault isolation

Deploy services on multiple Virtual Machines (VMs)

Demonstrate industry-standard technologies and architectural patterns

🧩 System Scope (MVP)

The Minimum Viable Product (MVP) focuses on the core ride-hailing workflow:

User & Driver authentication

Cab booking request creation

Driver matching (rule-based)

Trip lifecycle management

Real-time trip status notification

System monitoring & logging (basic level)

❗ Payment, advanced AI pricing, and route optimization are intentionally excluded to keep the MVP focused and feasible.

🏗️ Overall System Architecture

The system adopts a Microservices + Event-driven architecture, where each service is independently deployable and scalable.

High-level Architecture
[ Web / Client (React) ]
            |
        [ API Gateway ]
            |
------------------------------------------------
| Auth Service                                  |
| Booking Service                               |
| Driver Service (Matching Engine)              |
| Trip Service (Real-time Status)               |
------------------------------------------------
            |
   [ Message Broker (Kafka / RabbitMQ) ]
            |
        [ Database Layer ]

🖥️ Deployment Architecture (Multi-VM)

The system is deployed across multiple virtual machines to simulate a real-world distributed environment.

VM	Responsibility
VM1	API Gateway + Authentication Service
VM2	Booking Service
VM3	Driver Service & Matching Engine
VM4	Message Broker (Kafka / RabbitMQ)
VM5	Trip Service + WebSocket Server
(Optional VM6)	Monitoring & Logging (Grafana, Prometheus, ELK)

This deployment ensures:

Clear service isolation

Independent scalability

Fault containment across services

🔄 Core Workflow (Event-driven)
1️⃣ Cab Booking

User sends a booking request via REST API

Booking Service validates and creates the booking

An event BOOKING_CREATED is published to the message broker

2️⃣ Driver Matching

Driver Service consumes BOOKING_CREATED events

A suitable driver is selected using rule-based logic

Event DRIVER_ASSIGNED is published

3️⃣ Real-time Trip Updates

Trip Service consumes assignment events

Trip status is updated

Updates are pushed to the client via WebSocket

⚙️ Technology Stack
Backend

Node.js, Express.js

RESTful API

gRPC (design-ready)

Frontend

React.js

Tailwind CSS

Event-driven & Messaging

Apache Kafka or RabbitMQ

Real-time Communication

WebSocket (Socket.IO)

Deployment & Infrastructure

Docker

Virtual Machines

(Optional) Kubernetes / Terraform (design-level)

Security

JWT-based authentication

API Gateway enforcement

Zero Trust Architecture (conceptual level)

Monitoring & Logging

Prometheus, Grafana

ELK Stack (conceptual / partial implementation)

📈 Big Data & Scalability Perspective

Although the MVP is lightweight, the system reflects Big Data design principles:

High-volume booking events handled via streaming

Asynchronous event processing

Decoupled services for scalability

Ready for future extensions such as:

AI-based driver matching

Demand prediction

Dynamic pricing

✅ Key Architectural Benefits

Scalable: Services scale independently

Resilient: Failure in one service does not affect others

Real-time: Instant trip status updates

Cloud-ready: Designed for cloud and containerized environments

Maintainable: Clear separation of concerns
cab-booking-system/
│
├── docs/                         # UML, báo cáo
│   ├── architecture/
│   ├── sequence/
│   └── deployment/
│
├── gateway-service/              # VM1
│   ├── src/
│   │   ├── index.js
│   │   ├── routes.js
│   │   └── auth.middleware.js
│   └── Dockerfile
│
├── auth-service/                 # VM1
│   ├── src/
│   │   ├── auth.controller.js
│   │   ├── auth.service.js
│   │   └── jwt.util.js
│   └── Dockerfile
│
├── booking-service/              # VM2
│   ├── src/
│   │   ├── booking.controller.js
│   │   ├── booking.service.js
│   │   └── booking.model.js
│   └── Dockerfile
│
├── driver-service/               # VM3
│   ├── src/
│   │   ├── driver.controller.js
│   │   └── matching.service.js
│   └── Dockerfile
│
├── trip-service/                 # VM5
│   ├── src/
│   │   ├── trip.controller.js
│   │   ├── trip.service.js
│   │   └── websocket.js
│   └── Dockerfile
│
├── message-broker/               # VM4
│   └── docker-compose.yml        # Kafka / RabbitMQ
│
├── frontend/                     # React
│   ├── src/
│   └── tailwind.config.js
│
└── docker-compose.yml             # MVP local demo
