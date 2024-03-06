"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./FilterProperties.module.css";
import { motion } from "framer-motion";
import cities from "@/data/cities.json";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function FilterProperties({ hideOptionsHandler }) {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const [citiesList, setCitiesList] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [minimalAge, setMinimalAge] = useState({ value: 18, label: 18 });
  const [maximalAge, setMaximalAge] = useState(null);

  const [goal, setGoal] = useState({
    value: "будь-які",
    label: "будь-які",
    route: "any",
  });
  const [sex, setSex] = useState(null);

  const getCitiesByRegion = (region) => {
    const citiesArr = cities.filter((el) => el.region === region);
    const citiesFiltered = citiesArr.map((item) => {
      return {
        value: item["object_name"],
        label: item["object_name"],
        route: item.route,
      };
    });

    return citiesFiltered.sort((a, b) => a.value.localeCompare(b.value));
  };

  useEffect(() => {
    setSelectedCity(null);
    setCitiesList(
      getCitiesByRegion(selectedRegion === null ? null : selectedRegion.value)
    );
  }, [selectedRegion]);

  const sexOptions = [
    { value: "чоловіча", label: "чоловіча", route: "male" },
    { value: "жіноча", label: "жіноча", route: "female" },
  ];

  const goalOptions = [
    {
      value: "серйозні стосунки",
      label: "серйозні стосунки",
      route: "serious-relationship",
    },
    {
      value: "дружба і спілкування",
      label: "дружба і спілкування",
      route: "friendship",
    },
    { value: "флірт", label: "флірт", route: "flirt" },
    { value: "створення сім'ї", label: "створення сім'ї", route: "family" },
  ];

  const ageMin = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 60,
  ].map((el) => ({ value: el, label: el }));

  const ageMax = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
    75, 76, 77, 78, 79, 80,
  ].map((el) => ({ value: el, label: el }));

  const regions = [
    {
      value: "Автономна республіка крим",
      label: "Автономна Республіка Крим",
      route: "crimea",
    },
    {
      value: "Вінницька область",
      label: "Вінницька область",
      route: "vinnytska",
    },
    {
      value: "Волинська область",
      label: "Волинська область",
      route: "volynska",
    },
    {
      value: "Дніпропетровська область",
      label: "Дніпропетровська область",
      route: "dnipropetrovska",
    },
    { value: "Донецька область", label: "Донецька область", route: "donetska" },
    {
      value: "Житомирська область",
      label: "Житомирська область",
      route: "zhytomyrska",
    },
    {
      value: "Закарпатська область",
      label: "Закарпатська область",
      route: "zakarpatska",
    },
    {
      value: "Запорізька область",
      label: "Запорізька область",
      route: "zaporizka",
    },
    {
      value: "Івано-франківська область",
      label: "Івано-франківська область",
      route: "ivano-frankivska",
    },
    { value: "Київська область", label: "Київська область", route: "kyivska" },
    {
      value: "Кіровоградська область",
      label: "Кіровоградська область",
      route: "kirovohradska",
    },
    {
      value: "Луганська область",
      label: "Луганська область",
      route: "luhanska",
    },
    {
      value: "Львівська область",
      label: "Львівська область",
      route: "lvivska",
    },
    {
      value: "Миколаївська область",
      label: "Миколаївська область",
      route: "mykolaivska",
    },
    { value: "Одеська область", label: "Одеська область", route: "odeska" },
    {
      value: "Полтаська область",
      label: "Полтаська область",
      route: "poltavska",
    },
    {
      value: "Рівненська область",
      label: "Рівненська область",
      route: "rivnenska",
    },
    { value: "Сумська область", label: "Сумська область", route: "sumska" },
    {
      value: "Тернопільська область",
      label: "Тернопільська область",
      route: "ternopiska",
    },
    {
      value: "Харківська область",
      label: "Харківська область",
      route: "kharkivska",
    },
    {
      value: "Хмельницька область",
      label: "Хмельницька область",
      route: "khmelnytska",
    },
    {
      value: "Черкаська область",
      label: "Черкаська область",
      route: "cherkaska",
    },
    {
      value: "Чернівецька область",
      label: "Чернівецька область",
      route: "chernivetska",
    },
    {
      value: "Чернігівська область",
      label: "Чернігівська область",
      route: "chernihivska",
    },
  ];

  const router = useRouter();
  const setFiltersHandler = () => {

    if (
      !selectedRegion &&
      minimalAge.value === 18 &&
      !maximalAge &&
      goal.value === "будь-які" &&
      !sex
    ) {
      toast.error("Не вибрано жодних параметрів!");
      return;
    } else if (maximalAge != null && maximalAge.value < minimalAge.value) {
      toast.error("Некоректно вказані параметри віку!");
      return;
    }
    router.push(
      `${!selectedRegion ? "" : `/${selectedRegion.route}`}${
        selectedCity ? `/${selectedCity.route}` : ""
      }/?minAge=${minimalAge.value}${
        maximalAge ? `&maxAge=${maximalAge.value}` : ""
      }${goal ? `&goal=${goal.route}` : ""}${sex ? `&sex=${sex.route}` : ""}`
    );
    toast.success("Фільтр застосовано!");
    hideOptionsHandler();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.02 }}
      className={styles["filter-properties-wrapper"]}
    >
      <div className={styles["filter-properties"]}>
        <div className={styles.locations}>
          <div className={styles.region}>
            <p>Область</p>
            <Select
              defaultValue={selectedRegion}
              options={regions}
              onChange={setSelectedRegion}
              placeholder={"Обрати регіон"}
              instanceId="select-box-1"
            />
          </div>
          <div className={styles.city}>
            <p>Місто</p>
            <Select
              value={selectedCity}
              options={citiesList}
              onChange={setSelectedCity}
              placeholder={"Обрати населений пункт"}
              instanceId="select-box-2"
              noOptionsMessage={() => "Виберіть область"}
            />
          </div>
        </div>
        <div className={styles.aim}>
          <div className={styles.age}>
            <div className={styles.agefrom}>
              <p>Вік від</p>
              <Select
                options={ageMin}
                value={minimalAge}
                onChange={setMinimalAge}
                instanceId="select-box-3"
              />
            </div>
            <div>
              {maximalAge != null && maximalAge.value < minimalAge.value ? (
                <p className={styles.error}>Некоректно</p>
              ) : (
                <p>Вік до</p>
              )}
              <Select
                options={ageMax}
                value={maximalAge}
                onChange={setMaximalAge}
                placeholder={"Встановити"}
                instanceId="select-box-4"
              />
            </div>
          </div>
          <div className={styles.type}>
            <div className={styles.goal}>
              <p>Мета</p>
              <Select
                options={goalOptions}
                value={goal}
                onChange={setGoal}
                instanceId="select-box-5"
              />
            </div>
            <div>
              <p>Стать</p>
              <Select
                options={sexOptions}
                value={sex}
                onChange={setSex}
                instanceId="select-box-6"
                placeholder={"Обрати "}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["accept-btns"]}>
        <div className={styles["save-btn"]}>
          <button
            onClick={() => {
              setFiltersHandler();
            }}
          >
            Зберегти
          </button>
        </div>
        <div className={styles["close-filter-btn"]}>
          <button onClick={() => hideOptionsHandler()}>Відхилити</button>
        </div>
      </div>
    </motion.div>
  );
}

export default FilterProperties;
