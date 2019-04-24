import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CoolHackerSchema = new Schema({
  nickname: {
    type: String,
    required: 'nickname required',
  },
  cost: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  skills: {
    type: Array,
  },
  photo: {
    type: String,
    default: 'placeholder.png',
  },
});

export default mongoose.model('CoolHacker', CoolHackerSchema);
