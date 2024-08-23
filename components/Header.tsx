'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [profilePicture, setProfilePicture] = useState<string | null>(null);

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
        const savedProfilePicture = sessionStorage.getItem('profilePicture');

        setIsLoggedIn(isAuthenticated);
        setProfilePicture(savedProfilePicture);
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('profilePicture');
        setIsLoggedIn(false);
        setProfilePicture(null);
    };

    if (isLoggedIn) {
        return (
            <header className="border-b px-4 py-2 gap-2 bg-background/80 backdrop-blur flex items-center sticky top-0 inset-0">
                <Link className="flex-1" href="/">
                    <h1 className="text-lg font-bold flex-1 select-none cursor-pointer flex">
                        StudioVip
                    </h1>
                </Link>
                <nav className="flex gap-5 items-center">
                    {profilePicture ? (
                        <Image
                            src={profilePicture}
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                    )}
                    <Button onClick={handleLogout}>Logout</Button>
                </nav>
            </header>
        );
    } else {
        return (
            <header className="border-b px-4 py-2 gap-2 bg-background/80 backdrop-blur flex items-center sticky top-0 inset-0">
                <Link className="flex-1" href="/">
                    <h1 className="text-lg font-bold flex-1 select-none cursor-pointer flex">
                        StudioVip
                    </h1>
                </Link>
                <nav className="flex gap-5 items-center">
                    <Link href="/login">
                        <Button variant="outline">Login</Button>
                    </Link>
                </nav>
            </header>
        );
    }
}
