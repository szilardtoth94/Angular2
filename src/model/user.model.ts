export class UserModel {
  private _id: number;
  private _userName: string;
  private _password: string;
  private _userRoleId: number;
  private _lastLogin: Date;

  constructor({
                id,
                userName,
                password,
                userRoleId,
                lastLogin
              }) {
    this._id = id;
    this._userName = userName;
    this._password = password;
    this._userRoleId = userRoleId;
    this._lastLogin = lastLogin;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get userRoleId(): number {
    return this._userRoleId;
  }

  set userRoleId(value: number) {
    this._userRoleId = value;
  }

  get lastLogin(): Date {
    return this._lastLogin;
  }

  set lastLogin(value: Date) {
    this._lastLogin = value;
  }
}
