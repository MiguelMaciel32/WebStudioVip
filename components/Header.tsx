'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './ui/mode-toggle';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const template = 'https://cdn.discordapp.com/attachments/1155255776156323980/1277452142671826995/4284019-sv-logo-monogram-emblem-style-with-crown-shape-design-template-gratis-vetor.jpg?ex=66cd3784&is=66cbe604&hm=7f5941d18a266c41f093068967cec8459302fa143f3a8b09bde58cbd961abb92&'

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const savedProfilePicture = sessionStorage.getItem('profilePicture');


        const isAuthenticated = !!token;

        setIsLoggedIn(isAuthenticated);
        setProfilePicture(savedProfilePicture || template); 
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('profilePicture');
        setIsLoggedIn(false);
        setProfilePicture(null);
    };

    return (
        <header className="border-b px-4 py-2 gap-2 bg-background/80 backdrop-blur flex items-center sticky top-0 inset-0">
            <Link className="flex-1" href="/">
                <h1 className="text-lg font-bold flex-1 select-none cursor-pointer flex">
                    StudioVip
                </h1>
            </Link>
            <nav className="flex gap-5 items-center">
                <ModeToggle></ModeToggle>
                {isLoggedIn ? (
                    <>
                        {profilePicture ? (
                            <Link className="flex-1" href="/profile">
                                <Image
                                   src={profilePicture} 
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover" 
                                />
                            </Link>
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                        )}
                        <Button onClick={handleLogout}>Logout</Button>
                    </>
                ) : (
                    <Link href="/login">
                        <Button variant="outline">Login</Button>
                    </Link>
                )}
            </nav>
        </header>
    );
}
