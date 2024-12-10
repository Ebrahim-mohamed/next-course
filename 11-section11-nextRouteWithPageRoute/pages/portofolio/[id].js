import { useRouter } from "next/router";
export default function Id() {
  const route = useRouter();
  return (
    <div>
      <h1>{route.query.id}</h1>
    </div>
  );
}
