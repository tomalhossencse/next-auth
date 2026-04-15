import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

const userList = [
  { name: "tomal", password: "1234" },
  { name: "jamal", password: "5678" },
  { name: "kamal", password: "9012" },
];

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
