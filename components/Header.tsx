'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import SearchInputWithIcon from '@/components/Input-Icon';
import { Search } from 'lucide-react';

export default function Header() {
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        // Retrieve profile picture URL and login status from localStorage
        const savedProfilePicture = localStorage.getItem('profilePicture');
        const loggedIn = !!savedProfilePicture;
        setProfilePicture(savedProfilePicture);
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLogout = () => {
        // Clear localStorage and update state
        localStorage.removeItem('profilePicture');
        setProfilePicture(null);
        setIsLoggedIn(false);
    };

    return (
        <header className="border-b px-4 py-2 gap-2 bg-background/80 backdrop-blur flex items-center sticky top-0 inset-0">
            <Link className="flex-1" href="/">
                <h1 className="text-lg font-bold flex-1 select-none cursor-pointer flex">
                    StudioVip
                </h1>
            </Link>
            <nav className="flex gap-5 items-center">
                <div className="hidden md:flex">
                </div>
                <div className="flex gap-5 items-center">
                    <ModeToggle />
                    {isLoggedIn ? (
                        <>
                            {profilePicture ? (
                                <img
                                    src={profilePicture}
                                    alt="Profile"
                                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                />
                            ) : (
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'gray' }} />
                            )}
                            <Button onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <Link href="/login">
                            <Button variant="outline">Login</Button>
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}
