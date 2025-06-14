'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  IdentificationIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const links = [
    {name: 'Home', href: '/', icon: HomeIcon},
    {name: 'Products', href: '/search', icon: MagnifyingGlassIcon},
    {name: 'Artisans', href: '/artisans', icon: UsersIcon},
    {name: 'User', href: '/user', icon: IdentificationIcon},
    {name: 'Cart', href: '/cart', icon: ShoppingCartIcon}
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            { links.map((link) => {
                const LinkIcon = link.icon; 
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx('justify-center', {'bg-sky-100 text-blue-600': pathname === link.href})}>
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                </Link>
                );
            })}
        </>
    )
}