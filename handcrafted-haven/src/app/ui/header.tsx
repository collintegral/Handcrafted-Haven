import NavLinks from "./nav-links";
import styles from "./global.module.css";

export default function Header()
{
    return (
        <header className={styles.header}>
            <NavLinks />
        </header>
    );
}