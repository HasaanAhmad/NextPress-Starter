"use client";
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
import { signOut } from 'next-auth/react'

interface props{
    session: any
}
const AuthButton:React.FC<props> = ({session}) => {
  return (
    <div className="">
      {session?.user ? (
        <Button onClick={() => signOut()} variant="destructive" size="lg">
          Sign Out
        </Button>
      ) : (
        <Button onClick={() => signIn("google")} variant="default" size="lg">
          Sign In
        </Button>
      )}
    </div>
  )
}

export default AuthButton