export class JobModel {

  private id: number;
  private name: string;
  private description: string;
  private benefits: string;
  private code: string;

  constructor({
                id,
                name,
                description,
                benefits,
                code
              }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.benefits = benefits;
    this.code = code;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public getBenefits(): string {
    return this.benefits;
  }

  public setBenefits(benefits: string) {
    this.benefits = benefits;
  }

  public getCode():string{
    return this.code;
  }

  public  setCode(code:string){
    this.code=code;
  }
}
