import { Suspense } from 'react';
import LoginForm from '@/app/ui/login-form';
import styles from '../page.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {title: "Login"};

export default function Page() {
  return (
    <div className={styles.page}>
        <main className={styles.main}>
            <Suspense>
                <LoginForm />
            </Suspense>
        </main>
    </div>
  );
}
