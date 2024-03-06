import React from "react";
import styles from "./LoadMore.module.css";
import Image from "next/image";


function LoadMore() {
  return (
    <div className={styles["load-more"]}>
        <p>Показати ще</p>
        <Image src='/refresh.png' alt="load icon" width={16} height={16} />
    </div>
  );
}

export default LoadMore;
