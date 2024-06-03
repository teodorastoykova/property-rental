import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Navbar from "@/components/NavBar";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";

export const metadata = {
  title: "Propety Pulse",
  description: "Find your perfect rental property",
  keywords: "property, rental",
};

export default function MainLayout({ children }) {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
}
