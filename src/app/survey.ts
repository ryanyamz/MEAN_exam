import { User } from './user';

export class Survey {
  _id: string;
  question: string;
  option_1: string;
  vote1: number;
  option_2: string;
  vote2: number;
  option_3: string;
  vote3: number;
  option_4: string;
  vote4: number;
  user: User;
}
