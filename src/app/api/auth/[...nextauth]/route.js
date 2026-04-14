import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const userList = [
  { name: "tomal", password: "1234" },
  { name: "jamal", password: "5678" },
  { name: "kamal", password: "9012" },
];

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your email here",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Your Password",
        },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const user = userList.find((u) => u.name === username);
        if (!user) return null;
        const isPasswordOk = user.password == password;
        if (isPasswordOk) {
          return user;
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
