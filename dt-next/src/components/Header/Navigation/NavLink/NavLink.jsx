'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from './NavLink.module.css'

function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <li className={styles['link-item']}>
      {link.title === 'Повідомлення' || link.title === 'Сповіщення'?<div className={styles.notification}>9</div>:null}
      
      <Link href={link.path} className={`${pathName === link.path && styles.activelink}`}>
        <Image src={link.icon} alt="profile" width={19} height={19} />
        <span>{link.title}</span>
      </Link>
    </li>
  );
}

export default NavLink;
