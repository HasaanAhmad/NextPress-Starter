import React from 'react'
import { auth } from '@/server/auth'
import AuthButton from '@/components/AuthButton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const page = async() => {
    const session = await auth();
    
    if(!session?.user) {
        return( <div className='h-screen flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl font-bold'>YOU ARE NOT SINGED IN</h1>
        <div className='button-container flex gap-2'>
        <Link href={"/"}>
        <Button variant={"outline"} size={"lg"}>
            Go Back
        </Button>
        </Link>
        <AuthButton session={session}/>
        </div>
        
    </div>
        )
    }
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl font-bold'>Session</h1>
        <p>Signed in as {session.user.name}</p>
        <p>Email: {session.user.email}</p>
        
        <p>Random: {session.user.random}</p>
        <div className='button-container flex gap-2'>
        <Link href={"/"}>
        <Button variant={"outline"} size={"lg"}>
            Go Back
        </Button>
        </Link>
        <AuthButton session={session}/>
        </div>
        
    </div>
  )
}

export default page