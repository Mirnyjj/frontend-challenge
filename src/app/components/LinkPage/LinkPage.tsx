"use client";
import Link from "next/link";
import styles from "./linkPage.module.css";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  url: string;
};

export const LinkPage = ({ children, url }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={url}
      className={pathname === url ? styles.linkActive : styles.link}
    >
      {children}
    </Link>
  );
};
