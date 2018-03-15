import { User } from './user';

export class Survey {
  _id: string;
  question: string;
  option_1: string;
  vote1: number = 0;
  option_2: string;
  vote2: number = 0;
  option_3: string;
  vote3: number = 0;
  option_4: string;
  vote4: number = 0;
  user: User;
}
