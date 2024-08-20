"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "@/app/_components/Menu/index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => {
    console.log("Menu opened");
    setOpen(true);
  };

  const close = () => {
    console.log("Menu closed");
    setOpen(false);
  };

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.item}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/member">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <button
        className={cx(styles.button, styles.close, isOpen && styles.open)}
        onClick={close}
      >
        <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
      </button>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}
