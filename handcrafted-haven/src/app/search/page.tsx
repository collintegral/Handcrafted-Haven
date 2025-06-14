import styles from '../page.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {title: "Search"};

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Search
      </main>
    </div>
  );
}
