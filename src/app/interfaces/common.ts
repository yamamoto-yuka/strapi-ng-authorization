export interface Home {
  data:{
    attributes:{
      title:string;
      Name:string;
      JobTitle:string;
      BannerImage:{
        data:{
          attributes:{
            url:string;
          }
        }
      }
    }
  }
}

export interface Register{
  user:{
    confirmed:boolean;
  }
}

export interface Special{
  id:number;
  attributes:{
    Title:string;
    Description:string;
  }
}

export interface Specials{
  data:Special[];
}