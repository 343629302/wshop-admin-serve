import * as mongoose from 'mongoose';

export const SearchHotSchema = new mongoose.Schema({
  hotList: {
    type: Array,
    default: [],
  },
  store: String,
});
