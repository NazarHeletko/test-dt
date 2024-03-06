"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./User.module.css";
import Image from "next/image";
import userPhoto from "@/../public/girl.webp";
import Link from "next/link";

function User({user}) {

  return (
    <Link href="/id" className={styles["user-link"]}>
      <motion.div whileHover={{ scale: 1.015 }} className={styles.user}>
        <div className={styles["heder-info"]}>
          <div className={styles["img-profile"]}>
            <Image
              width={200}
              height={200}
              src={user.src}
              alt=""
            />
          </div>
          <div className={styles["profile-info"]}>
            <ul>
              <li>
                <Image src="/birthday-cake.svg" alt="" width={16} height={16} />{" "}
                <span>{user.age} років</span>
              </li>
              <li>
                <Image src="/intersex.svg" alt="" width={16} height={16} />{" "}
                <span>{user.sex}</span>
              </li>
              <li>
                <Image src="/height.svg" alt="" width={16} height={16} />
                <span>{user.height} см</span>{" "}
              </li>
              <li>
                <Image src="/ring.svg" alt="" width={16} height={16} />
                <span>{user.marital}</span>
              </li>
              <li>
                <Image src="/baby.svg" alt="" width={16} height={16} />
                <span>{user.children}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["name-section"]}>
          <div className={styles.name}>
            <div className={styles["online-status"]}></div>
            <span>{user.name}</span>
          </div>
        </div>
        <div className={styles["about-section"]}>
          <p>
            {user.description}
          </p>
        </div>

        <p className={styles.location}>
          <Image src="/location.svg" alt="" width={16} height={16} />
          {user.location}
        </p>
      </motion.div>
    </Link>
  );
}

export default User;
