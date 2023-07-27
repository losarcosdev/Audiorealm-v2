import { IAddress } from "@/interfaces";

interface Props {
  address: IAddress;
}

export const AddressCard = ({ address }: Props) => {
  return (
    <div className="flex flex-col gap-2 shadow-sm p-5 rounded-sm bg-white justify-start">
      <div className="flex text-sm items-center gap-2">
        <span className="flex-1 font-medium">Location:</span>
        <span className="text-zinc-500">{address.location}</span>
      </div>
      <div className="flex text-sm items-center gap-2">
        <span className="flex-1 font-medium">Address:</span>
        <span className="text-zinc-500">{address.address}</span>
      </div>
      <div className="flex text-sm items-center gap-2">
        <span className="flex-1 font-medium">Address 2:</span>
        <span className="text-zinc-500">{address.address2 || "Empty"}</span>
      </div>
      <div className="flex text-sm items-center gap-2">
        <span className="flex-1 font-medium">City:</span>
        <span className="text-zinc-500">{address.city}</span>
      </div>
      <div className="flex text-sm items-center gap-2">
        <span className="flex-1 font-medium">Country:</span>
        <span className="text-zinc-500">{address.country}</span>
      </div>
      <div className="flex text-sm items-center gap-2">
        <span className="flex-1 font-medium">Phone Number:</span>
        <span className="text-zinc-500">{address.phoneNumber}</span>
      </div>
      <div className="flex text-sm items-center gap-2">
        <span className="flex-1 font-medium">Postal Code:</span>
        <span className="text-zinc-500">{address.postalCode}</span>
      </div>
    </div>
  );
};
