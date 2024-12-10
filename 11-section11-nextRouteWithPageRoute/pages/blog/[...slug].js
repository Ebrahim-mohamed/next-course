import Link from "next/link";
import { useRouter } from "next/router";

export default function Blogs() {
  const route = useRouter();
  console.log(route.query);
  return (
    <div>
      <h1>Blogs page</h1>
    </div>
  );
}
