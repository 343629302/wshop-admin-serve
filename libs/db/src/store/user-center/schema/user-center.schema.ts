import * as mongoose from 'mongoose';

export const UserCenterSchema = new mongoose.Schema({
  headStyle: {
    type: String,
    default: '#B2B2B2',
  },
  historyShow: {
    type: Boolean,
    default: true,
  },
  navOneShow: {
    type: Boolean,
    default: false,
  },
  navOneImage: {
    type: String,
    default: '',
  },
  navOneLink: {
    type: String,
    default: '',
  },
  navTwoShow: {
    type: Boolean,
    default: false,
  },
  navTwoImage: {
    type: String,
    default: '',
  },
  navTwoLink: {
    type: String,
    default: '',
  },
  menuStyle: {
    type: Number,
    default: 0,
  },
  menuHasInterval: {
    type: Boolean,
    default: false,
  },
  meunList: {
    type: Array,
    default: [
      {
        title: '收货管理',
        icon: '',
        link: '',
      },
      {
        title: '分销',
        icon: '',
        link: '',
      },
      {
        title: '拼团中心',
        icon: '',
        link: '',
      },
    ],
  },
  store: String,
});
