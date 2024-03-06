'use client'

import React from "react";
import styles from "./MobileMenuList.module.css";
import {motion, AnimatePresence} from'framer-motion'
import Link from "next/link";
import Image from "next/image";

function MobileMenuList({isMobOpenHandler}) {

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 100}} exit={{opacity: 0}} transition={{duration: 0.3}}
      onClick={()=>isMobOpenHandler('close')}
      className={styles["open-menu-options-wrapper"]}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles["open-menu-options"]}
      >
        <div className={styles['list-items-wrapper']}>
          <Link href="/">
            <Image src='/love-hearts.svg' alt="Пошук" width={28} height={28}/>
            <span>Пошук</span>
          </Link>
          <Link href="/profile" >
            <Image src='/user.svg' alt="Моя сторінка" width={28} height={28}/>
            <span>Моя сторінка</span>
          </Link>
          <Link href="/messages" >
            <Image src='/messages.svg' alt="Повідомлення" width={28} height={28}/>
            <span>Повідомлення</span>
          </Link>
          <Link href="/notifications" width={28} height={28}>
            <Image src='notification.svg' alt="Сповіщення" width={28} height={28}/> 
            <span>Сповіщення</span>
          </Link>
          <Link href="/settings" >
            <Image src='settings.svg' alt="Налаштування" width={28} height={28}/>
            <span>Налаштування</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default MobileMenuList;
