

import "./globals.css";
import Header from "@/components/Header/Header";

//👇 Import Open Sans font
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Foter/Footer";





//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
           
              {children}
    
        <Footer />

      </body>
    </html>
  );
}
