import { Document } from 'mongoose';
export interface Merchant extends Document {
  readonly name: string;
  readonly logo: string;
  readonly adress: string[];
  readonly introduce: string;
}
