export interface IProduct {
  _id             : string;
  description     : string;
  images          : string[];
  inStock         : number;
  price           : number;
  slug            : string;
  title           : string;
  category        : ICategory;
  createdAt       : string;
  updatedAt       : string;
  metaDescription : string;
  metaKeywords    : string;
}

export type ICategory = "earphone" | "headphone" | "speaker";
