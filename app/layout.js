import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
export const metadata = {
  title: "Notes App",
  description: "Notes app description.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      </body>
    </html>
  );
}
