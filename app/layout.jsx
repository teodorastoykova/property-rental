import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Navbar from "@/components/NavBar";
export const metadata = {
  title: "Propety Pulse",
  description: "Find your perfect rental property",
  keywords: "property, rental",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}