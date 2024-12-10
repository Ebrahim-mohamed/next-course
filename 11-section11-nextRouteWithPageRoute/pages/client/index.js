import Link from "next/link";
export default function Client() {
  return (
    <div>
      <h1>client page</h1>
      <ul>
        <li>
          <Link href="/client/client1">client1</Link>
        </li>
        <li>
          <Link href="/client/client2">client2</Link>
        </li>
      </ul>
    </div>
  );
}
