import { Document } from 'mongoose';
export interface Decoration extends Document {
  readonly title: string;
  readonly background: string;
  readonly shareTitle: string;
  readonly shareImage: string;
  readonly customize: any[];
  readonly store: string;
}
