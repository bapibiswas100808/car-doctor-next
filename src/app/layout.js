import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import AuthProvider from "@/Services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor",
  description: "Car Repairing Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
