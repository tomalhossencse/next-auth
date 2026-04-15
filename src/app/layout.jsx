import { Poppins } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/provider/NextAuthProvider";
import Navbar from "@/components/Navbar";
const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
});

const RootLayout = ({ children }) => {
  return (
    <html className={`${poppins.className}`}>
      <NextAuthProvider>
        <body className="">
          <Navbar />
          <main>{children}</main>
        </body>
      </NextAuthProvider>
    </html>
  );
};
export default RootLayout;
