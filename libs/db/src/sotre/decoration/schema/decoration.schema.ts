import * as mongoose from 'mongoose';

export const DecorationSchema = new mongoose.Schema({
  title: String,
  background: {
    type: String,
    default: '#FFFFFF',
  },
  shareTitle: {
    type: String,
    default: '',
  },
  shareImage: {
    type: String,
    default: '',
  },
  customize: {
    type: Array,
    default: [],
  },
  store: String,
});
