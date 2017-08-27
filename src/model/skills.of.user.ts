export class SkillsOfUser {
  private _id: number;
  private _personalInfoId: number;
  private _skillsId: number;

  constructor({
                id,
                personalInfoId,
                skillsId
              }) {
    this._id = id;
    this._personalInfoId = personalInfoId;
    this._skillsId = skillsId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get personalInfoId(): number {
    return this._personalInfoId;
  }

  set personalInfoId(value: number) {
    this._personalInfoId = value;
  }

  get skillsId(): number {
    return this._skillsId;
  }

  set skillsId(value: number) {
    this._skillsId = value;
  }
}
