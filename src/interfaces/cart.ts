export interface ICartProduct {
  _id       : string;
  images    : string;
  price     : number;
  slug      : string;
  title     : string;
  category  : ICategory;
  createdAt : string;
  updatedAt : string;
  quantity  : number;
  inStock   : number;
}

type ICategory = "earphone" | "headphone" | "speaker";
