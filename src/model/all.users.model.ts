export class AllUserModel {

  private id: number;
  private firstName: string;
  private lastName: string;
  private description: string;

  constructor({
                id,
                firstName,
                lastName,
                description,
              }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string) {
    this.description = description;
  }

}
