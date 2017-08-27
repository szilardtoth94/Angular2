export class UserEducationModel {
  private _id: number;
  private _schoolName: string;
  private _graduatedYear: number;
  private _description: string;
  private _personalInfoId: number;

  constructor({
                id,
                schoolName,
                graduatedYear,
                description,
                personalInfoId
              }) {
    this._id = id;
    this._schoolName = schoolName;
    this._graduatedYear = graduatedYear;
    this._description = description;
    this._personalInfoId = personalInfoId;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get schoolName(): string {
    return this._schoolName;
  }

  set schoolName(value: string) {
    this._schoolName = value;
  }

  get graduatedYear(): number {
    return this._graduatedYear;
  }

  set graduatedYear(value: number) {
    this._graduatedYear = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get personalInfoId(): number {
    return this._personalInfoId;
  }

  set personalInfoId(value: number) {
    this._personalInfoId = value;
  }
}
