import { db } from "@/database";
import { ProductResponse } from "@/interfaces";
import Product from "@/models/Product";
import { ProductList } from "../components";

const SpeakersPage = async () => {
  await db.connect();

  const speakers = await Product.find({ category: "speaker" })
    .lean()
    .select("title images price inStock slug category -_id");

  await db.disconnect();

  return (
    <section>
      <div className="bg-zinc-900 h-[10vh] flex items-center justify-center sticky top-0 z-50">
        <h4 className="text-white font-semibold tracking-tighter text-2xl">
          SPEAKERS
        </h4>
      </div>

      <ProductList products={speakers as ProductResponse[]} />
    </section>
  );
};

export default SpeakersPage;
