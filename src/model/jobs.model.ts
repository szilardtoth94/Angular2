import {SkillsModel} from "./skills.model";

export class JobModel {
  private _id: number;
  private _name: string;
  private _description: string;
  private _benefits: string;
  private _code: string;
  private _skills: SkillsModel[];

  constructor({
                id,
                name,
                description,
                benefits,
                code,
                skills
              }) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._benefits = benefits;
    this._code = code;
    this._skills = [];

    if (skills) {
      skills.forEach((jobSkills) => {
        this._skills.push(new SkillsModel(jobSkills));
      })
    }
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

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get benefits(): string {
    return this._benefits;
  }

  set benefits(value: string) {
    this._benefits = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get skills(): SkillsModel[] {
    return this._skills;
  }

  set skills(value: SkillsModel[]) {
    this._skills = value;
  }
}
