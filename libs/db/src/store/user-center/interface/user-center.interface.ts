import { Document } from 'mongoose';
export interface UserCenter extends Document {
  readonly headStyle: string;
  readonly historyShow: boolean;
  readonly navOneShow: boolean;
  readonly navOneImage: string;
  readonly navOneLink: string;
  readonly navTwoShow: boolean;
  readonly navTwoImage: string;
  readonly navTwoLink: string;
  readonly menuStyle: number;
  readonly menuHasInterval: boolean;
  readonly meunList: any[];
  readonly store: string;
}
