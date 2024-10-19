import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  fallback: ["Helvetica Neue", "sans-serif"],
  subsets: ["latin-ext", "latin"],
});

export const metadata = {
  title: "Tugas Pemograman Web",
  description:
    "Ini adalah website untuk memberikan pemahaman mengenai infrastruktur internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
