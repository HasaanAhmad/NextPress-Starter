import NextAuth, { type DefaultSession } from "next-auth"
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/server/db";

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
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  


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
