"use server";
import { CatsType } from "./models/models";
import { getCats } from "./getCats";
import styles from "./styles.module.css";
import { Card } from "./components/Card/Card";

export default async function Page() {
  const cats: CatsType[] = await getCats();
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
