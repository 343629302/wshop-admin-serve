import { Document } from 'mongoose';
export interface Navigation extends Document {
  readonly activeColor: string;
  readonly inactiveColor: string;
  readonly nav: any[];
  readonly store: string;
}
