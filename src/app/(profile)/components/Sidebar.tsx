import { UserNavMenu } from "@/components/common/UserNavMenu";
import { Settings } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { SignOutBtn } from "./SignOutBtn";
import {
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components";

export const Sidebar = async () => {
  const session = await getServerSession();

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-zinc-900 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-white">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              {/* Mobile devices only */}
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                      ></path>
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="w-full flex-col sm:max-w-lg bg-zinc-900 border-zinc-800 border-[2px] text-white"
                >
                  <SheetHeader>
                    <SheetTitle className="text-white">AudioRealm</SheetTitle>
                    <Separator className="bg-zinc-600 mt-2" />
                  </SheetHeader>
                  <div className="flex h-full flex-col items-center mt-2">
                    <SheetClose asChild>
                      <Link
                        href="/user-profile/orders"
                        className="flex items-center p-1 text-white rounded-sm w-full hover:bg-zinc-700 duration-150 text-center"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Orders
                        </span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/user-profile"
                        className="flex items-center p-1 text-white rounded-sm w-full hover:bg-zinc-700 duration-150 text-center"
                      >
                        <Settings />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Settings
                        </span>
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
              <Link href="/" className="flex ml-2 md:mr-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  AudioRealm
                </span>
              </Link>
            </div>
            <UserNavMenu user={session?.user} />
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
            ></div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/user-profile/orders"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
              </Link>
            </li>
            <li>
              <Link
                href="/user-profile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Settings />
                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
            <li>
              <SignOutBtn />
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64"></div>
    </>
  );
};
