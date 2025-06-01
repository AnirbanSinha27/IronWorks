import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: 'swap',
});

export const metadata = {
  title: "Ironworks Gym | Premium 24/7 Fitness in Thomasville, AL",
  description: "Ironworks Gym offers 24/7 access to premium fitness equipment, personal training, and group classes in Thomasville, AL.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans bg-dark text-accent antialiased`}
      >
        {children}
      </body>
    </html>
  );
}