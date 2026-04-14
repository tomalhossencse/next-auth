import { Poppins } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/provider/NextAuthProvider";
const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
});

const RootLayout = ({ children }) => {
  return (
    <html className={`${poppins.className}`}>
      <NextAuthProvider>
        <body className="">{children}</body>
      </NextAuthProvider>
    </html>
  );
};
export default RootLayout;
