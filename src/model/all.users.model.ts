export class AllUserModel {

  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _description: string;

  constructor({
                id,
                firstName,
                lastName,
                description,
              }) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._description = description;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
