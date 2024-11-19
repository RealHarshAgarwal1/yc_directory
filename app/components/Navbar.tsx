import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth,signOut,signIn } from '@/auth';

const Navbar = async () => {
    const session =await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className='flex justify-between items-center'>
            <Link href="/">
            <Image src="/logo.png" alt="ERROR" width={144} height={30} />
            </Link>

            <div className="flex items-center gap-5 text-black">
                {session && session?.user ? (
                    <div>
                    <Link href="/startup/create">
                    <span>Create</span>
                    </Link>
            </div>
   9 |   return (
> 10 |     <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
     |      ^^^^^^
  11 |         <nav className='flex justify-between items-center'>
  12 |             <Link href="/">
  13 |             <Image src="/logo.png" alt="ERROR" width={144} height={30} />

Unexpected token `header`. Expected jsx identifier         <button onClick={signOut}>
                        <span>Logout</span>
                    </button>

                    <Link href={`/user/${session?.id}`}>
                        <span>{session?.user?.name}</span>
                    </Link>
                    </>
                ):(
                    <button onClick={signIn( provider:'github')}>
                        <span>Login</span>
                    </button>
                )}
            </div>
        </nav>
    </header>
  );
}

export default Navbar;
