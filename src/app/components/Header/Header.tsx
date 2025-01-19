import styles from "./header.module.css";
import { LinkPage } from "../LinkPage/LinkPage";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <LinkPage url="/">Все котятки</LinkPage>
        <LinkPage url="/favorite-cats">Любимые котятки</LinkPage>
      </nav>
    </header>
  );
}
