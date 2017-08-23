import {UserEducationModel} from './user.education.model';

export class UserModel {

  private id: number;
  private firstName: string;
  private lastName: string;
  private description: string;
  private user_educations: UserEducationModel[];

  constructor({
                id,
                firstName,
                lastName,
                description,
                user_educations,
              }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.user_educations=user_educations;
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

  public getEducationList():UserEducationModel[] {
    return this.user_educations;
  }
}
