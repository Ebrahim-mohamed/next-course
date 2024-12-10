import { useRouter } from "next/router";
import Link from "next/link";
export default function Client() {
  const route = useRouter();

  return (
    <div>
      <h1>specific client page : {route.query.clientId}</h1>
      <ul>
        <li>
          <Link href={`/client/${route.query.clientId}/project1`}>
            project1
          </Link>
        </li>
        <li>
          <Link href={`/client/${route.query.clientId}/project2`}>
            project2
          </Link>
        </li>
      </ul>
    </div>
  );
}
