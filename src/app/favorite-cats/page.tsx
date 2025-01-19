"use client";
import { Card } from "../components/Card/Card";
import styles from "../styles.module.css";
import { useEffect, useState } from "react";

export default function FavoriteCatsPage() {
  const storageKey: string = "favorite-cat";
  const [favoriteCats, setFavoriteCats] = useState([]);

  useEffect(() => {
    const updateFavoriteCats = () => {
      const catsFromLocalStorage = localStorage.getItem(storageKey);
      if (catsFromLocalStorage) {
        setFavoriteCats(JSON.parse(catsFromLocalStorage));
      } else {
        setFavoriteCats([]);
      }
    };
    updateFavoriteCats();
    window.addEventListener("storage", updateFavoriteCats);
    return () => {
      window.removeEventListener("storage", updateFavoriteCats);
    };
  }, []);

  if (favoriteCats.length === 0) {
    return (
      <div className={styles.title}>
        <p>У вас пока нет любимых котиков.</p>
      </div>
    );
  }

  return (
    <div className={styles.homePage}>
      <ul className={styles.ul}>
        {favoriteCats.map(({ idFavoriteCat, urlFavoriteCat }) => (
          <li key={idFavoriteCat}>
            <Card url={urlFavoriteCat} id={idFavoriteCat} />
          </li>
        ))}
      </ul>
    </div>
  );
}
