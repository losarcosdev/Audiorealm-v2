import { db } from "@/database";
import { DataTable, columns } from "./components";
import { getServerSession } from "next-auth";
import User from "@/models/User";
import Order from "@/models/Order";

const OrdersPage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    return <div>Page not found</div>;
  }

  await db.connect();
  const dbUser = await User.findOne({ email: session.user.email }).lean();
  const dbOrders = (await Order.find().lean()) || [];
  await db.disconnect();

  const userOrders =
    dbOrders
      .filter((order) => order.user?.toString() === dbUser?._id.toString())
      .map((order) => ({
        id: order._id.toString(),
        status: order.isPaid ? "Paid" : "Pending",
        price: `$${order.total}`,
        product: {
          title: order.orderItems[0].title,
          image: order.orderItems[0].image,
        },
      })) || [];

  return (
    <div className="sm:pl-72 pt-12 lg:container flex flex-col max-w-7xl gap-5">
      <h1 className="text-3xl tracking-tighter font-semibold">MY ORDERS</h1>
      <div className="text-black">
        <DataTable columns={columns} data={userOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
