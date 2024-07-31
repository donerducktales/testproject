'use client'

import Link from 'next/link';
import '../Header/header.css'
import Image from 'next/image';
import navLogo from '@/public/img/header/nav-logo.svg';
import searchIcon from '@/public/img/header/search-icon.svg';
import { inter } from '@/app/config/fonts';
import { useRef } from 'react';

export default function Header() {
   const navRef = useRef<any>(null);

   const handleClick = () => {
      navRef.current.classList.toggle('active')
   }

   return (
      <header>
         <header className="header_contaner">
            <nav className="nav_links">
               <div className="nav_logo">
                  <Link href={'/'} >
                     <Image
                        src={navLogo}
                        alt='MetaBlog logo'
                        priority={false}
                     />
                  </Link>
               </div>
               <ul className="nav_buttons">
                  <li>
                     <Link href={'/'}>Home</Link>
                  </li>
                  <li>
                     <Link href={''}>Blog</Link>
                  </li>
                  <li>
                     <Link href={''}>Single Post</Link>
                  </li>
                  <li>
                     <Link href={''}>Pages</Link>
                  </li>
                  <li>
                     <Link href={''}>Contact</Link>
                  </li>
               </ul>
               <div className={`${inter.className} nav_instruments`}>
                  <div className="search-panel">
                     <input type="text" placeholder='Search' />
                     <Image
                        src={searchIcon}
                        alt='search icon'
                        width={'16'}
                        height={'16'}
                        className='search-icon'
                     />
                  </div>
                  <div className="dark-mode">
                     
                  </div>
               </div>
               <div
                  className="nav_mobile-menu-btn"
                  onClick={handleClick}
               >
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div 
                  ref={navRef}
                  className='nav_mobile-menu'
               >
                  <ul className="nav_buttons-mobile">
                     <li>
                        <Link href={'/'}>Home</Link>
                     </li>
                     <li>
                        <Link href={''}>Blog</Link>
                     </li>
                     <li>
                        <Link href={''}>Single Post</Link>
                     </li>
                     <li>
                        <Link href={''}>Pages</Link>
                     </li>
                     <li>
                        <Link href={''}>Contact</Link>
                     </li>
                  </ul>
                  <div className={`${inter.className} nav_instruments-mobile`}>
                     <div className="search-panel">
                        <input type="text" placeholder='Search' />
                        <Image
                           src={searchIcon}
                           alt='search icon'
                           width={'16'}
                           height={'16'}
                           className='search-icon'
                        />
                     </div>
                     <div className="dark-mode">
                        
                     </div>
                  </div>
               </div>
            </nav>
         </header>
      </header>
   );
}