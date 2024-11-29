import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Roomify",
  description: `Roomify is a cutting-edge hotel management system designed to streamline and simplify hotel operations for seamless guest experiences. Whether you're managing reservations, tracking room availability, or overseeing billing and payments, Roomify provides a one-stop solution with an intuitive, user-friendly interface.
  Key Features:
  Efficient Room Management: Easily manage room bookings, availability, and guest preferences.
  Reservation System: Simplified booking process for guests, with real-time updates on availability.
  Payment Integration: Secure and hassle-free payment processing for guests and hotel administrators.
  Customizable Dashboard: Tailored analytics and insights for property managers to optimize operations.
  User Roles: Flexible access for Admin, Staff, and Guests to ensure smooth workflow management.
  Responsive Design: Optimized for all devices, providing a seamless experience for desktop and mobile users.
  Chat Support Integration: Connect with guests directly for inquiries, feedback, or booking assistance.
  With Roomify, hotel owners and managers can focus on delivering exceptional guest experiences while the system takes care of the complexities behind the scenes. Roomify is the future of hotel management—simple, efficient, and innovative.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <head>
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`} 
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
