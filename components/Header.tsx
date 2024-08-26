'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';  // Certifique-se de que o caminho está correto
import { ModeToggle } from './ui/mode-toggle';    // Certifique-se de que o caminho está correto

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const template = 'https://cdn.discordapp.com/attachments/1155255776156323980/1277452142671826995/4284019-sv-logo-monogram-emblem-style-with-crown-shape-design-template-gratis-vetor.jpg?ex=66cd3784&is=66cbe604&hm=7f5941d18a266c41f093068967cec8459302fa143f3a8b09bde58cbd961abb92&';

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const savedProfilePicture = sessionStorage.getItem('profilePicture');

    setIsLoggedIn(!!token);
    setProfilePicture(savedProfilePicture || template);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('profilePicture');
    setIsLoggedIn(false);
    setProfilePicture(null);
    window.location.reload();
  };

  return (
    <header className="border-b px-4 py-2 gap-2 bg-background/80 backdrop-blur flex items-center sticky top-0 inset-0">
      <Link href="/" className="flex-1">
        <h1 className="text-lg font-bold flex-1 select-none cursor-pointer flex">
          StudioVip
        </h1>
      </Link>
      <nav className="flex gap-5 items-center relative">
        <ModeToggle />

        <div className="flex items-center gap-2 relative">
          {isLoggedIn ? (
            <div className="relative group">
              <div className="cursor-pointer">
                <Image
                  src={profilePicture || ''}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul className="flex flex-col p-2">
                  <li className="p-2 hover:bg-gray-100">
                    <Link href="/profile">
                      Perfil
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left"
                    >
                      Sair da conta
                    </button>
                  </li>
                </ul>
              </div>
            </div>
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
