export class JobApplyModel {
  private _id: number;
  private _jobId: number;
  private _userId: number;

  constructor({
                id,
                jobId,
                userId
              }) {
    this._id = id;
    this._jobId = jobId;
    this._userId = userId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get jobId(): number {
    return this._jobId;
  }

  set jobId(value: number) {
    this._jobId = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }
}
