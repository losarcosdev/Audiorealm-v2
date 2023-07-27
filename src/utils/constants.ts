import { Headphones, Speaker, Home, Ear } from "lucide-react";

interface Routes {
  name: string;
  route: string;
  Component?: any;
}

export const links: Routes[] = [
  { name: "home", route: "/", Component: Home },
  { name: "headphones", route: "/headphones", Component: Headphones },
  { name: "earphones", route: "/earphones", Component: Ear },
  { name: "speakers", route: "/speakers", Component: Speaker },
];
