'use client'

import React, { useState } from "react";
import styles from "./FilterSection.module.css";
import FilterProperties from "./FilterProperties/FilterProperties";

function FilterSection() {
  const [showOptions, setShowOptions] = useState(false)

  const hideOptionsHandler = () => {
    setShowOptions(!showOptions)
  }

  return (
    <div className={styles["filter-section"]}>
      <div className={styles["filter-options"]}>
        <div>
          <button>Карточки</button>
        </div>
        <div className={styles["fast-filter"]}>
          <button>Усі</button>
          <button>Онлайн</button>
        </div>
        <div>
          <button onClick={()=>hideOptionsHandler()}>Фільтр</button>
        </div>
      </div>
      {showOptions && <FilterProperties hideOptionsHandler={hideOptionsHandler}/>}
    </div>
  );
}

export default FilterSection;
