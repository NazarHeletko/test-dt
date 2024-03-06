'use client'

import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import MobileMenuButton from "./MobileMenu/MobileMenuButton/MobileMenuButton";
import MobileMenuList from "./MobileMenu/MobileMenuList/MobileMenuList";
import NavLink from "./NavLink/NavLink";


function Navigation() {
    const [isMobileOpen, setIsMobileOpen] = useState('initial')

    const isMobOpenHandler = (val) => {
        setIsMobileOpen(val)
    }

    const links = [
      {title: 'Пошук', path: '/', icon: '/love-hearts.svg'},
      {title: 'Увійти', path: "/profile", icon: '/love-hearts.svg'},
      {title: 'Повідомлення', path: "/messages", icon: '/messages.svg'},
      {title: 'Сповіщення', path: "/notifications", icon: '/notification.svg'},
      {title: 'Налаштування', path: "/settings", icon: '/settings.svg'},
    ]

  return (
    <div className={styles.nav}>
      <ul>
        {links.map(link=><NavLink key={link.title} link={link}/>)}

        <li><Image src='/day-night.svg' alt="theme" width={19} height={19}/></li>
        <li className={styles.mobile}>
          <MobileMenuButton isMobileOpen={isMobileOpen} isMobOpenHandler={isMobOpenHandler}/>
        </li>
      </ul>
      {isMobileOpen == 'open' ? <MobileMenuList isMobOpenHandler={isMobOpenHandler}/> : null }
      
    </div>
  );
}

export default Navigation;
