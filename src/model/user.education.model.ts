
export class  UserEducationModel {


  private id: number;
  private schoolName: string;
  private graduatedYear: number;
  private description:string;
  private personal_info_id:number;

  constructor ({
                 id,
                 schoolName,
                 graduatedYear,
                 description,
                 personal_info_id
               }){
    this.id=id;
    this.schoolName = schoolName;
    this.graduatedYear=graduatedYear;
    this.description=description;
    this.personal_info_id=personal_info_id;
  }

  public getId():number{
    return this.id;
  }

  public setId(id:number){
    this.id =id;
  }

  public  getSchoolName():string{
    return this.schoolName;
  }

  public setSchoolName(schoolName:string){
    this.schoolName=schoolName;
  }

  public getGraduatedYear():number{
    return this.graduatedYear;
  }
  public setGraduatedYear(graduatedYear:number){
    this.graduatedYear=graduatedYear;
  }

  public getDescription():string{
    return this.description;
  }

  public setDescription(description:string){
    this.description=description;
  }
  public getPersonalInfoId():number{
    return this.personal_info_id;
  }
  public setPersonalInfoId(personal_info_id:number){
    this.personal_info_id=personal_info_id;
  }
}
