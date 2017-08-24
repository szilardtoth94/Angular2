export class UserWorkExperienceModel {


  private _id: number;
  private _companyName: string;
  private _position: string;
  private _startDate: Date;
  private _endDate: Date;
  private _personal_info_id: number;

  constructor({
                id,
                companyName,
                position,
                startDate,
                endDate,
                personal_info_id
              }) {
    this._id = id;
    this._companyName = companyName;
    this._position = position;
    this._startDate = startDate;
    this._endDate = endDate;
    this._personal_info_id = personal_info_id;
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

  get personal_info_id(): number {
    return this._personal_info_id;
  }

  set personal_info_id(value: number) {
    this._personal_info_id = value;
  }
}
