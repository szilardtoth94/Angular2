export class UserWorkExperienceModel {


  private _id: number;
  private _companyName: string;
  private _position: string;
  private _startDate: Date;
  private _endDate: Date;
  private _personInfoId: number;

  constructor({
                id,
                companyName,
                position,
                startDate,
                endDate,
                personInfoId
              }) {
    this._id = id;
    this._companyName = companyName;
    this._position = position;
    this._startDate = startDate;
    this._endDate = endDate;
    this._personInfoId = personInfoId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get companyName(): string {
    return this._companyName;
  }

  set companyName(value: string) {
    this._companyName = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get personInfoId(): number {
    return this._personInfoId;
  }

  set personInfoId(value: number) {
    this._personInfoId = value;
  }
}
