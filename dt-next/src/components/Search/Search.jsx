"use client";

import React, { useEffect, useState } from "react";

import styles from "./Search.module.css";

import User from "./User/User";
import FilterSection from "./FilterSection/FilterSection";
import LoadMore from "./LoadMore/LoadMore";
import PagesContainer from "../PagesContainer/PagesContainer";


function Search() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
       
      })
  }, [])


  return (
    <PagesContainer>
      <div className={styles.search}>
        <FilterSection />

        <div className={styles["items-greed"]}>
          {users.map((el) => (
            <User key={el._id} user={el} />
          ))}
        </div>
        <LoadMore />
      </div>
    </PagesContainer>
  );
}

export default Search;
