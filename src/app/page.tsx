"use client";

import { Card } from "./components/Card/Card";
import { getCats } from "./getCats";
import { CatsType } from "./models/models";
import styles from "./styles.module.css";

import { useEffect, useState } from "react";

export default function Page() {
  const [cats, setCats] = useState<CatsType[] | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      const fetchedCats = await getCats();
      setCats(fetchedCats);
    }
    fetchData();
  }, []);

  if (!cats) {
    return <div>Загружаем котиков...</div>;
  }
  return (
    <div className={styles.homePage}>
      <ul className={styles.ul}>
        {cats.map((cat, index) => (
          <li key={index}>
            <Card url={cat.url} id={cat.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
