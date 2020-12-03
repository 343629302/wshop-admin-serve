import * as mongoose from 'mongoose';

export const ThemeSchema = new mongoose.Schema({
  customColor: {
    type: Array,
    default: [],
  },
  styleType: {
    type: Number,
    default: 0,
  },
  store: String,
});
