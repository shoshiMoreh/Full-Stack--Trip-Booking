# Trip Booking - Full Stack Project

## Description
A Full-Stack web application for managing and booking organized trips.  
The system allows users to register, log in, browse available trips, filter and sort trips, book seats, and manage their reservations.  
Admins can also manage trips and users.  

This project demonstrates a complete integration between **Angular** (frontend), **C#** (backend with three-tier architecture), and **SQL Server** (database).  

---

## Technologies
| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | Angular + UI design libraries       |
| Backend      | C# with three-tier architecture     |
| Database     | SQL Server                          |
| Auth & Logic | Custom login, validation, business rules |
| Architecture | Clean separation of concerns        |

---

## Features
- **Homepage:** Clean landing page with logo and advertisements.  
- **Authentication:** User registration and login with validation, including role-based login (Admin / User). After login, the user’s name is displayed across all pages.  
- **Trips Page:** View upcoming trips, filter by type, see full trip details (name, date, type, price, etc.), book seats with availability check, and cancel reservations.  
- **Personal Area:** Edit personal details (update or delete account if no future trips exist), view all booked trips with filtering (past/future) and sorting (by type or price).  
- **Extra Challenge:** Highlight booked trips visually (special border/background) and allow quick cancellation from the trips list.  

---

## Project Goal

The project demonstrates a full-stack development workflow with clean architecture, practical user flows, and seamless integration of modern technologies.
It provides hands-on experience in building a real-world system with Angular, C#, and SQL Server.
