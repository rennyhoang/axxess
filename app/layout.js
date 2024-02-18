import { Karla } from "next/font/google";
import "./globals.css";

const inter = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Resolve Rx",
  description: "axxess hackathon 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
