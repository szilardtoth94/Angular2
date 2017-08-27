export class RequirementsModel {
  private _id: number;
  private _skillsId: number;
  private _jobId: number;

  constructor({
                id,
                jobId,
                skillsId
              }) {
    this._id = id;
    this._jobId = jobId;
    this._skillsId = skillsId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get skillsId(): number {
    return this._skillsId;
  }

  set skillsId(value: number) {
    this._skillsId = value;
  }

  get jobId(): number {
    return this._jobId;
  }

  set jobId(value: number) {
    this._jobId = value;
  }
}
