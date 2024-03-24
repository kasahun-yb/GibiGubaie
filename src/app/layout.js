import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Appbar from "./screen/Appbar";
import Contacts from './contact/Contacts'
const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], weight:'100' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Appbar/>
        {children}
        <Contacts/>
        </body>
     
    </html>
  );
}
