import * as mongoose from 'mongoose';

export const MerchantSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '微商城',
  },
  logo: {
    type: String,
    default:
      'https://image-c.weimobwmc.com/sass-admin/f866363f7c154be8a77dd4862a1406f8.png',
  },
  adress: Array,
  introduce: {
    type: String,
    default: '',
  },
});
