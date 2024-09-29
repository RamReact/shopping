interface pdf {
    name: string; 
    link: string;
  }
  

 export interface Product {
    product_id:string,
    productpreview: string; 
    colorpreview: string;
    sheen: string[];
    Size: string; 
    colormode: string;
    colorFamily: string;
    upcnumber: string;
    pdf: pdf[];
    category: string; 
    colorName: string;
    colorName2: string;
  }
  
  export type productDataArray={[key:string]:Product};
  // Export the interfaces for use in other files

  