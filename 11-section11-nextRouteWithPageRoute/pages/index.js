import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>hello from HomePage</h1>
      <ul>
        <li>
          <Link href="/portofolio">portofolio</Link>
        </li>
        <li>
          <Link href="/client">client</Link>
        </li>
      </ul>
    </div>
  );
}
