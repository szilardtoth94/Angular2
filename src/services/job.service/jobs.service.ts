
import {Injectable} from "@angular/core";
const jobsList =[
  {
    id: 1,
    name: 'User1',
    email: 'xxx@yyy.com1'
  }, {
    id: 2,
    name: 'User2',
    email: 'xxx@yyy.com2'
  }, {
    id: 3,
    name: 'User3',
    email: 'xxx@yyy.com3'
  },
];

@Injectable()

export class JobsService{
  public getAllJobs() {
    return jobsList;
  }

  public getJobById(id: number): object {
    const job = jobsList.find((jobInfo) => jobInfo.id === id);

    return job ? job : {};
  }

}
