import * as mongoose from 'mongoose';

export const NavigationSchema = new mongoose.Schema({
  activeColor: {
    type: String,
    default: '#FA392D',
  },
  inactiveColor: {
    type: String,
    default: '#B2B1AF',
  },
  nav: {
    type: Array,
    default: [
      {
        title: '首页',
        link: '/',
      },
      {
        title: '分类',
        link: '/classify',
      },
      {
        title: '购物车',
        link: '/shopping-cart',
      },
      {
        title: '我的',
        link: '/my',
      },
    ],
  },
  store: String,
});
