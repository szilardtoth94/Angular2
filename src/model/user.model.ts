import {UserEducationModel} from './user.education.model';
import {UserWorkExperienceModel} from './user.work.experience';

export class UserModel {


  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _description: string;
  private _userEducations: UserEducationModel[];
  private _userWorkExperience: UserWorkExperienceModel[];

  constructor({
                id,
                firstName,
                lastName,
                description,
                userEducation,
                workExperience
              }) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._description = description;
    this._userEducations=[];
    this._userWorkExperience = [];

    userEducation.forEach((userEducation) => {
      this._userEducations.push(new UserEducationModel(userEducation));
    });
    workExperience.forEach((userWork) => {
      this._userWorkExperience.push(new UserWorkExperienceModel(userWork));
    })
    // for(let i =0; i<user_educations.length;i++) {
    //   this.user_educations[0] = new UserEducationModel(user_educations[i]);
    // }
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

  get userEducations(): UserEducationModel[] {
    return this._userEducations;
  }

  set userEducations(value: UserEducationModel[]) {
    this._userEducations = value;
  }


  get userWorkExperience(): UserWorkExperienceModel[] {
    return this._userWorkExperience;
  }

  set userWorkExperience(value: UserWorkExperienceModel[]) {
    this._userWorkExperience = value;
  }
}
