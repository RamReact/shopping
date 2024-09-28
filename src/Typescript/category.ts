// Interface for Sheen
export interface Sheen {
    code: string;
    name: string;
  }
  
  // Interface for Description
  export interface Description {
    para: string[];
    outline: {
      heading: string;
      points: string[];
    };
  }
  
  // Interface for CategoryItem
  export interface CategoryItem {
    name: string;
    image: string;
    brand: string;
    Description: Description;
    product: string[];
    sheen: Sheen[];
    colorfamily: string[];
  }
  

  // Type for CategoryDataArray
  export type CategoryDataArray = { [key: string]: CategoryItem };
  
 