import Link from "next/link";
import styles from "./Nav.module.css"; // CSS module import kiya gaya hai

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      {/* Main container ke liye class use ki */}
      <h1 className={styles.logo}>Foodess</h1>{" "}
      {/* Logo ke liye class apply ki */}
      <ul className={styles.navList}>
        {" "}
        {/* Navigation list ke liye class apply ki */}
        <li>
          <Link href="/home" className={styles.navLink}>
            Home
          </Link>{" "}
          {/* Link styling ke liye class apply ki */}
        </li>
        <li>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/menu" className={styles.navLink}>
            Menu
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
