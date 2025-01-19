"use client";
import styles from "./styles.module.css";
import Header from "./components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head></head>
      <body className={styles.body}>
        <Header />
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
