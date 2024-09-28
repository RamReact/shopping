//tech category data declarations
export interface commonpdflistItem{
    name:string,
    link:string
  }
  
  export interface TechCategoryDataItem{
    category:string,
    commonpdflist:commonpdflistItem[]
  }
  
  export type TechCategoryDataArray={[key:string]:TechCategoryDataItem};