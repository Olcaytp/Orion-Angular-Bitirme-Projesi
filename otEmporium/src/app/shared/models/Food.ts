export class Food{
  id!:number;
  name!:string;
  price!:number;
  tags?:string[];
  favorite:boolean = false;
  origins!: string[];
  stars:number = 0;
  imageUrl!:string;
  cookTime!:string;
}
