import { redirect } from 'next/navigation';
import styles from '../page.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {title: "User"};

export default function Page() {
    //if (!loginToken) {
        redirect('/login');
    //}

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        User
      </main>
    </div>
  );
}