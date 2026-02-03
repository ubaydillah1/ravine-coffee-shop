# Ravine Coffee – Cafe Order Management System (Frontend)
Frontend for a cafe order management system built with Next.js, streamlining customer orders, payments, and real-time updates.
*Realtime and WebSocket features work only when running locally.*
## Demo
- 🌐 User Path: [Live Demo](https://ravine-coffee-shop.vercel.app/welcome)  
- 🔑 Admin/Cashier Login: [Login Page](https://ravine-coffee-shop.vercel.app/login)  
- 📂 Repository: [GitHub](https://github.com/ubaydillah1/ravine-coffee-shop)  

🧑‍💻 Test Accounts  
- Admin: admin@gmail.com / admin123  
- Cashier: cashier1@gmail.com / cashier123  
Visit /login to test different user roles.
## About
Ravine Coffee is an in-store cafe order and management system designed to enhance the customer experience. Customers can place orders via QR code from their tables or at the cashier, with secure QRIS payments. The frontend enables real-time connections for customers, cashiers, and kitchen staff, tracking orders seamlessly.
## Technology
The frontend is built with Next.js for server-side rendering and routing, styled using Tailwind CSS. It utilizes TanStack Query for data fetching and caching, and Zustand for efficient state management. Infinite scroll enhances user experience for loading menus dynamically. Deployed on Vercel for fast performance and scalability.
## Key Stack
- ⚛️ Next.js
- 🌊 Typescript
- 🎨 Tailwind CSS  
- 🔄 TanStack Query  
- 🗃️ Zustand  
- ☁️ Vercel  
## Installation
Clone the repository:  
```bash
git clone https://github.com/ubaydillah1/ravine-coffee-shop.git  
cd ravine-coffee-shop  
```  
Install dependencies:  
```bash
npm install  
# or  
yarn  
# or  
pnpm install  
# or  
bun install  
```  
## Environment Variables
Create a `.env.local` file in the root directory with the following:  
```bash
NEXT_PUBLIC_API_URL=  
NEXT_PUBLIC_BASE_URL=  
```  
Fill in the values (e.g., API endpoint and base URL for your setup).
## Getting Started
Run the development server:  
```bash
npm run dev  
# or  
yarn dev  
# or  
pnpm dev  
# or  
bun dev  
```
Open http://localhost:3000 in your browser.
