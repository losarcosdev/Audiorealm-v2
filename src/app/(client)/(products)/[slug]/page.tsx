import { SingleProductResponse } from "@/interfaces";
import {
  ProductDetails,
  ProductImageCarousel,
  ProductMoreInfo,
} from "./components";
import { db } from "@/database";
import Product from "@/models/Product";
import { ProductList } from "../components";

const getProduct = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PREFIX_API_URL}/products/${slug}`
  );
  const product = (await response.json()) as SingleProductResponse;

  if (!product) throw new Error("product not found");

  return product;
};

interface Props {
  params: {
    slug: string;
  };
}

const ProductDetailPage = async ({ params }: Props) => {
  const { slug } = params;
  const product = await getProduct(slug);

  await db.connect();
  const relatedProducts = await Product.aggregate([
    { $match: { category: product.category, _id: { $ne: product._id } } },
    { $sample: { size: 3 } },
    { $project: { _id: 0 } },
  ]);
  await db.disconnect();

  return (
    <section className="max-w-7xl mx-auto">
      <header className="md:w-screen md:h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around">
        <ProductImageCarousel image={product.images[0]} />
        <ProductDetails product={product} />
      </header>

      <ProductMoreInfo description={product.description} />
      {/* Related Products */}
      <section className="md:h-screen flex flex-col items-center justify-center">
        <h4 className="text-2xl font-semibold container">Related Products</h4>
        <hr className="border-[1.5px] container my-4" />
        <ProductList products={relatedProducts} />
      </section>
    </section>
  );
};

export default ProductDetailPage;
