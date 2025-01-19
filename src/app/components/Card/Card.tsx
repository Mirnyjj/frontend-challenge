"use client";
import Image from "next/image";
import styles from "./card.module.css";
import { useState, useEffect } from "react";
import { FavoriteCat } from "../../models/models";

type Props = {
  url: string;
  id: string;
};

export const Card = ({ url, id }: Props) => {
  const storageKey: string = "favorite-cat";
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedCats: FavoriteCat[] = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );
    setIsFavorite(
      storedCats.findIndex((cat: FavoriteCat) => cat.idFavoriteCat === id) !==
        -1
    );
  }, [isFavorite]);

  const findFavoriteCat = (urlFavoriteCat: string, idFavoriteCat: string) => {
    let storedCats: FavoriteCat[] = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );
    const isFavoriteCat =
      storedCats.findIndex((cat) => cat.idFavoriteCat === idFavoriteCat) !== -1;

    if (!isFavoriteCat) {
      storedCats.push({ urlFavoriteCat, idFavoriteCat });
    } else {
      storedCats = storedCats.filter(
        (cat) => cat.idFavoriteCat !== idFavoriteCat
      );
    }

    localStorage.setItem(storageKey, JSON.stringify(storedCats));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.imageContainer}>
      <Image
        alt="cat"
        src={url}
        width={225}
        height={225}
        unoptimized
        priority
      />
      <button className={styles.heart} onClick={() => findFavoriteCat(url, id)}>
        <svg
          width="40"
          height="37"
          viewBox="0 0 40 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
            fill="rgba(242, 78, 30, 1)"
          />

          <path
            d="M20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
            fill={isFavorite ? "rgba(242, 78, 30, 1)" : ""}
          />
        </svg>
      </button>
    </div>
  );
};
