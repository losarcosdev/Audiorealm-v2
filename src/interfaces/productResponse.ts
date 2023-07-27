export interface ProductResponse {
  images   : string[];
  inStock  : number;
  price    : number;
  slug     : string;
  title    : string;
  category : Category;
}

export enum Category {
  Headphone = "headphone",
  Earphone  = "earphone",
  Speaker   = "speaker",
}

export interface SingleProductResponse {
  _id:             string;
  description:     string;
  images:          string[];
  inStock:         number;
  price:           number;
  slug:            string;
  title:           string;
  category:        string;
  metaDescription: string;
  metaKeywords:    string;
  __v:             number;
  createdAt:       string;
  updatedAt:       string;
}
