'use client';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Link from 'next/link';

export default function LoggedOutHeader() {
  return (
    <header className="border-b px-4 py-2 gap-2 bg-background/80 backdrop-blur flex items-center sticky top-0 inset-0">
      <Link className="flex-1" href="/">
        <h1 className="text-lg font-bold flex-1 select-none cursor-pointer flex">
          StudioVip
        </h1>
      </Link>
      <nav className="flex gap-5 items-center">
        <ModeToggle />
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </nav>
    </header>
  );
}
