import {UserModel} from "./user.model";

export class userPersInfoModel {

  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _description: string;
  private _usersId: number;
  private _user: UserModel;

  constructor({
                id,
                firstName,
                lastName,
                description,
                usersId,
                user
              }) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._description = description;
    this._usersId = usersId;
    this._user=user;
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

  get userId(): number {
    return this._usersId;
  }

  set userId(value: number) {
    this._usersId = value;
  }

  get usersId(): number {
    return this._usersId;
  }

  set usersId(value: number) {
    this._usersId = value;
  }

  get user(): UserModel {
    return this._user;
  }

  set user(value: UserModel) {
    this._user = value;
  }
}
