import NextAuth, { type DefaultSession } from "next-auth"
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/server/db";
import github from "next-auth/providers/github";

declare module "next-auth" {
  
  interface Session {
    user: {
     random: string

    } & DefaultSession["user"]
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  // adapter: PrismaAdapter(prisma), // Uncomment this line to use Prisma Adapter with Database
  providers: [Google,
    // github // Uncomment this line to use Github Provider


  ],
  


  callbacks:{
    async signIn({user, account, profile, email, credentials}){

    return true;
    },
    session({session, token, user}){
      session.user.random="random"
      return session
    }

  }
});
