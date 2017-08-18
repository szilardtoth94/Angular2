export class  UserModel {

  private id: number;
  private name: string;
  private email: string;
  private imageUrl:string;

  constructor ({
                 id,
                 name,
                 email,
                 imageUrl
               }){
    this.id=id;
    this.name = name;
    this.email=email;
    this.imageUrl=imageUrl;
  }

  public getId():number{
    return this.id;
  }

  public setId(id:number){
    this.id =id;
  }

  public  getName():string{
    return this.name;
  }

  public setName(name:string){
    this.name=name;
  }

  public getEmail():string{
    return this.email;
  }
  public setEmail(email:string){
    this.email=email;
  }

  public getUrl():string{
    return this.imageUrl;
  }

  public setUrl(imageUrl:string){
    this.imageUrl=imageUrl;
  }
}
