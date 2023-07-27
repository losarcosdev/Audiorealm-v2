"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Input,
  Separator,
} from "@/components";
import { useToast } from "@/components/use-toast";
import axios from "axios";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
  location: string;
  address: string;
  address2?: string;
  city: string;
  country: string;
  phoneNumber: string;
  postalCode: string;
}

interface Props {
  userId: string;
}

export const AddNewAddress = ({ userId }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const { toast } = useToast();
  const router = useRouter();

  const onAddNewAddress = async (formData: FormData) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_PREFIX_API_URL}/user/address`,
        {
          userId,
          ...formData,
        }
      );
      router.refresh();
      toast({
        title: `New address added: ${formData.location}`,
      });
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  const location = watch("location");
  const address = watch("address");
  const city = watch("city");
  const country = watch("country");
  const phoneNumber = watch("phoneNumber");
  const postalCode = watch("postalCode");

  return (
    <div className="w-full relative">
      <MapPin className="absolute text-zinc-500 top-2 left-1 w-5 h-5" />
      {/* Modal */}
      <AlertDialog>
        <AlertDialogTrigger className="w-full">
          <Input
            className="w-full pl-7"
            placeholder="Add new address"
            readOnly
          />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add a new address</AlertDialogTitle>
            <Separator className="-mt-2" />
          </AlertDialogHeader>
          {/* Form */}
          <form id="add-address-form" onSubmit={handleSubmit(onAddNewAddress)}>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="location"
                className="text-gray-500 dark:text-gray-400"
              >
                Location *
              </label>
              <input
                {...register("location", {
                  required: true,
                })}
                type="text"
                name="location"
                id="location"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Example: My Home"
              />
              {errors.location && (
                <span className="text-sm text-red-700">
                  Please enter a valid location
                </span>
              )}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register("address", {
                  required: true,
                })}
                type="text"
                name="address"
                id="address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address *
              </label>
              {errors.address && (
                <span className="text-sm text-red-700">
                  Address is required
                </span>
              )}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register("address2", {
                  required: false,
                })}
                type="text"
                name="address2"
                id="address2"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="address2"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address 2 (Optional)
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("city", {
                    required: true,
                  })}
                  type="text"
                  name="city"
                  id="city"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="city"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City *
                </label>
                {errors.city && (
                  <span className="text-sm text-red-700">
                    Please enter a city
                  </span>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("country", {
                    required: true,
                  })}
                  type="text"
                  name="country"
                  id="country"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="country"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Country *
                </label>
                {errors.country && (
                  <span className="text-sm text-red-700">
                    Please enter a country
                  </span>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("phoneNumber", {
                    required: true,
                  })}
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phoneNumber"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890) *
                </label>
                {errors.phoneNumber && (
                  <span className="text-sm text-red-700">
                    Please enter a valid phone number
                  </span>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  {...register("postalCode", {
                    required: true,
                  })}
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="postalCode"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Postal code *
                </label>
                {errors.postalCode && (
                  <span className="text-sm text-red-700">
                    Please enter a postal code
                  </span>
                )}
              </div>
            </div>
          </form>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {location &&
            address &&
            city &&
            phoneNumber &&
            country &&
            postalCode ? (
              <AlertDialogAction>
                <Button form="add-address-form">Add</Button>
              </AlertDialogAction>
            ) : (
              <Button form="add-address-form">Add</Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
