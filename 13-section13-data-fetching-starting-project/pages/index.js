import fs from "fs/promises";
// import { revalidatePath } from "next/cache";
// import { notFound } from "next/navigation";
import Link from "next/link";
import path from "path";
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  if (data.products.length == 0) {
    return { notFound: true };
  }
  return {
    props: { products: data.products, revalidatePath: 10 },
  };
}

export default HomePage;
