import classes from "./main-header.module.css";
import logoImage from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navLink";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImage} alt="" priority />
        NextLevel food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">join our community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
