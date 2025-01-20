"use client";
import { Card } from "../components/Card/Card";
import { FavoriteCat } from "../models/models";
import styles from "../styles.module.css";
import { useEffect, useState } from "react";

export default function FavoriteCatsPage() {
  const storageKey: string = "favorite-cat";
  const [favoriteCats, setFavoriteCats] = useState<FavoriteCat[]>([]);

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
  const handleCardRemoved = (removedId: string) => {
    setFavoriteCats(
      favoriteCats.filter((cat) => cat.idFavoriteCat !== removedId)
    );
  };

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
        {favoriteCats.map(({ urlFavoriteCat, idFavoriteCat }, key) => (
          <li key={key}>
            <Card
              url={urlFavoriteCat}
              id={idFavoriteCat}
              onRemove={handleCardRemoved}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
