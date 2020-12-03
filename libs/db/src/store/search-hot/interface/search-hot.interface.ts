import { Document } from 'mongoose';
export interface SearchHot extends Document {
  readonly hotList: any[];
  readonly store: string;
}
