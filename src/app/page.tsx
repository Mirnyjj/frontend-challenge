import { getCats } from "./getCats";
import { CatsType } from "./models/models";
import styles from "./styles.module.css";
import { Card } from "./components/Card/Card";
export default async function Home() {
  let cats: CatsType[] = await getCats();
  return cats.length > 1 ? (
    <div className={styles.homePage}>
      <ul className={styles.ul}>
        {cats.map(({ url, id }, key) => (
          <li key={key}>
            <Card url={url} id={id} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className={styles.title}>Загружаем котиков</div>
  );
}
