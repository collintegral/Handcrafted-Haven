import styles from '../page.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {title: "Artisans"};

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Artisans
      </main>
    </div>
  );
}
