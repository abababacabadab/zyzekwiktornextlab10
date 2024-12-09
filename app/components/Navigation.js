import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/about-me">O mnie</Link></li>
        <li><Link href="/interests">Moje zainteresowania</Link></li>
        <li><Link href="/favorite">Ulubiony film lub gra</Link></li>
        <li><Link href="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
