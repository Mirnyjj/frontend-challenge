"use client";

import Header from "./components/Header/Header";
import styles from "./styles.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>Котики</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Мои любимые котики" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={styles.body}>
        <Header />
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
