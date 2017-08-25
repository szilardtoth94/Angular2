export class UserSkillsModel {
  private _id: number;
  private _name: string;
  private _description: number;


  constructor({
                id,
                name,
                description
  }) {
    this._id = id;
    this._name = name;
    this._description = description;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): number {
    return this._description;
  }

  set description(value: number) {
    this._description = value;
  }
}
