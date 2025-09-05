import "./globals.css";
import Navbar from "@/components/Navbar";
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
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
