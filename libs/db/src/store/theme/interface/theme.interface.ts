import { Document } from 'mongoose';
export interface Theme extends Document {
  readonly customColor: string[];
  readonly styleType: number;
  readonly store: string;
}
