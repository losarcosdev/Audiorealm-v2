import Product from "@/models/Product";
import { ProductList } from "../components";
import { ProductResponse } from "@/interfaces";
import { db } from "@/database";

const HeadphonesPage = async () => {
  await db.connect();
  const headphones = await Product.find({ category: "headphone" })
    .lean()
    .select("title images price inStock slug category -_id");
  await db.disconnect();

  return (
    <section>
      <div className="bg-zinc-900 h-[10vh] flex items-center justify-center sticky top-0 z-50">
        <h4 className="text-white font-semibold tracking-tighter text-2xl">
          HEADPHONES
        </h4>
      </div>

      <ProductList products={headphones as ProductResponse[]} />
    </section>
  );
};

export default HeadphonesPage;
