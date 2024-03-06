import React from "react";
import styles from "./MobileMenuButton.module.css";


function MobileMenuButton({isMobileOpen, isMobOpenHandler}) {


  return (
    <>
      <div 
        onClick={()=>{isMobileOpen === 'open' ? isMobOpenHandler('close') : isMobOpenHandler('open')}}
        className={`${styles.btn} ${
            isMobileOpen === 'open' ? styles.active : isMobileOpen !== 'initial' && styles["not-active"]
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </>
  );
}

export default MobileMenuButton;
