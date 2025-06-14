import styles from '../page.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {title: "Cart"};

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Cart
      </main>
    </div>
  );
}
