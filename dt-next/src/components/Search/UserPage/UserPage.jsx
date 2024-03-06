import React from "react";
import styles from "./UserPage.module.css";
import Image from "next/image";
import userIcon from '@/../public/girl.webp'
import Link from "next/link";



function UserPage() {

  return (
    <div className={styles["user-page"]}>
      <div className={styles["short-info"]}>
        <div className={styles["short-info-img"]}>
          <Image
            src={userIcon}
            alt=""
          />
        </div>

        <div className={styles["description"]}>
          <div className={styles.name}>
            <h2>Катя Редиска</h2>
            <span>
              <Image src='/location.svg' alt="" width={13} height={13}/>
              Львівська, Дрогобич
            </span>
            <p>Онлайн: 06.08.2023</p>
          </div>
          <div className={styles.info}>
            <div className={styles["user-info"]}>
              <ul>
                <li>
                  <Image src='/birthday-cake.svg' alt="" width={20} height={20}/>
                  Вік: <span> 30</span>
                </li>
                <li>
                  <Image src='/intersex.svg' alt="" width={20} height={20}/>
                  Стать: <span>жіноча</span>
                </li>
                <li>
                  <Image src='/height.svg' alt="" width={20} height={20}/>
                  Ріст: <span>170 см</span>
                </li>
                <li>
                  <Image src='/weight.svg' alt="" width={20} height={20}/>
                  Вага: <span>65кг</span>
                </li>
                <li>
                  <Image src='/ring.svg' alt="" width={20} height={20}/>
                  Статус: <span>розведена</span>
                </li>
                <li>
                  <Image src='/baby.svg' alt="" width={20} height={20}/>
                  Діти: <span>2</span>
                </li>
                <li>
                  <Image src='/religion.svg' alt="" width={20} height={20}/>
                  Релігія: <span>християнство</span>
                </li>
                <li>
                  <Image src='/zodiac.svg' alt="" width={20} height={20}/>
                  Зодіак: <span>телець</span>
                </li>
                <li>
                  <Image src='/pipe-smoke.svg' alt="" width={20} height={20}/>
                  Куріння: <span>не курю</span>
                </li>
                <li>
                  <Image src='/alcohol.svg' alt="" width={20} height={20}/>
                  Алкоголь: <span>інколи</span>
                </li>
                <li>
                  <Image src='/search.svg' alt="" width={20} height={20}/>
                  Мета: <span>стосунки</span>
                </li>
                <li>
                  <Image src='/education.svg' alt="" width={20} height={20}/>
                  Освіта: <span>вища</span>
                </li>
                <li>
                  <Image src='/work.svg' alt="" width={20} height={20}/>
                  Професія: <span>перукар</span>
                </li>
                <li>
                  <Image src='/tools.svg' alt="" width={20} height={20}/>
                  Стан зайнятості: <span>безробітня</span>
                </li>
              </ul>
            </div>
            <div className={styles["user-options"]}>
              <div className={styles["options-item"]}>
                <Image src='/heart-dont-liked.svg' alt="" width={24} height={24}/>
                <span>Вподобати</span>
              </div>
              <div className={styles["options-item"]}>
                <Image src='/message-chat.svg' alt="" width={24} height={24}/>
                <span>Написати</span>
              </div>
              <div className={styles["options-item"]}>
                <Image src='/gift.svg' alt="" width={24} height={24}/>
                <span>Подарунок</span>
              </div>
              <div className={styles["options-item"]}>
                <Image src='/bookmark.svg' alt="" width={24} height={24}/>
                <span>Добавити в закладки</span>
              </div>
              <div className={styles.stats}>
                <div><Image src='/eye.svg' alt="" width={18} height={18}/><span>112</span></div>
                <div><Image src='/rating.svg' alt="" width={18} height={18}/><span>66</span></div>
              </div>
              <div className={styles['gift-section']}>
                  <p>Останні подарунки</p>
                  <div className={styles['gifts-list']}>
                    {/* <Gift/>
                    <Gift/>
                    <Gift/> */}
                  </div>
              </div>
              <div className={`${styles["options-item"]} ${styles.block}}`}>
                <Image src='/blocked-user.svg' alt="" width={24} height={24}/>
                <span>Заблокувати</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles["about-me-title"]}>Трохи про мене</p>
      <div className={styles["about-user"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        voluptas nesciunt aliquid possimus ducimus rem quas adipisci, sapiente
        veritatis hic saepe dolores blanditiis, rerum repudiandae architecto
        illum vero velit consectetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        voluptas nesciunt aliquid possimus ducimus rem quas adipisci, sapiente
        veritatis hic saepe dolores blanditiis, rerum repudiandae architecto
        illum vero velit consectetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        voluptas nesciunt aliquid possimus ducimus rem quas adipisci, sapiente
        veritatis hic saepe dolores blanditiis, rerum repudiandae architecto
        illum vero velit consectetur.
      </div>
      <Link
        href="/"
   
        className={styles["close-single-page-btn"]}
      ></Link>
    </div>
  );
}

export default UserPage;
