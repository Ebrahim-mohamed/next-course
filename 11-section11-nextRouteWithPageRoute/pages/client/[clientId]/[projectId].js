import { useRouter } from "next/router";
export default function Client() {
  const route = useRouter();
  return (
    <div>
      <h1>client`s project page : {route.query.projectId}</h1>
    </div>
  );
}
