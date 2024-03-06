import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import { Toaster, toast } from "sonner";



function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src="/dt-logo.png" alt="logo" height={22} width={58} />
        </div>
        <div className={styles.navigation}>
          <Navigation />
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </>
  );
}

export default Header;
