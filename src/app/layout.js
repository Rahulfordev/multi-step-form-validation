import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/providers";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Multi-Step Form with Validation",
  description: "This is a Multi-Step Form built using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-gray-100 dark:bg-gray-900 text-black dark:text-white`}
      >
        <div className="fixed top-4 right-4 z-50">
          <DarkModeToggle />
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
