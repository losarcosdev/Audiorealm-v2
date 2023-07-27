import { AddressCard } from "./";
import { IAddress } from "@/interfaces";

interface Props {
  addresses: IAddress[];
}

export const AddressesList = ({ addresses }: Props) => {
  return (
    <div className="flex items-center flex-wrap w-full gap-2">
      {addresses.map((address) => (
        <AddressCard key={address.location} address={address} />
      ))}
    </div>
  );
};
