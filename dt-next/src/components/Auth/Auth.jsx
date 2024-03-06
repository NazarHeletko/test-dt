"use client";
import React, { useState } from "react";
import styles from "./Auth.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const initialValues = { name: "", email: "", password: "" };

const initState = { values: initialValues };

function Auth() {

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values } = state;

  const router = useRouter()
  const onBlurInput = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[0-8])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name) {
      toast.error("Ім'я не може бути пустим");
      return;
    }

    if (!isValidEmail(values.email)) {
      toast.error("Не коректна пошта");
      return;
    }

    if (!values.password || values.password.length < 8 ) {
      toast.error("Пароль не може бути меншим 8 символів");
      return;
    }

    if (!isValidPassword(values.password)) {
      toast.error("Пароль має включати в себе цифри, великі та малі букви");
      return;
    }
    try {
      const res = await fetch("https://test-dt-server.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });
      console.log(res)
      if (res.status === 400) {
        toast.error("Ви вже зареєстровані! Увійдіть.");
      }
      if (res.status === 201) {
        router.push("/");
        console.log('успішно')
      }
    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className={styles["auth-wrapper"]}>
      <div className={styles.auth}>
        <h3>Зареєструйтеся, щоб розпочати знайомства</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles["reg-title"]}>{`Ім'я`}</p>
          <input
            name="name"
            value={values.name}
            type="text"
            onChange={handleChange}
            onBlur={onBlurInput}
            className={touched.name && !values.name ? styles.touched : ""}
          />
          <p className={styles["reg-title"]}>E-mail</p>
          <input
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            className={touched.email && !values.email ? styles.touched : ""}
            onBlur={onBlurInput}
          />
          <p className={styles["reg-title"]}>Пароль</p>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            className={touched.password && !values.password ? styles.touched : ""}
            onBlur={onBlurInput}
          />
          <button className={styles["reg-btn"]}>Зареєструватися</button>
        </form>
        <p>Вже зареєстровані?</p>
        <button className={styles["enter-btn"]}>Тоді увійдіть</button>
        <p>Або зайдіть через</p>
        <div className={styles["social-login"]}>
          <button>
            <Image
              src={"/google-com.svg"}
              alt="google"
              width={24}
              height={24}
            />
            <span>google</span>
          </button>
          <button>
            <Image
              src={"/facebook-com.svg"}
              alt="facebook"
              width={24}
              height={24}
            />
            <span>facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
