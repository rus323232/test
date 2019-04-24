import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ServiceSchema = new Schema({
  title: {
    type: String,
    required: 'Enter a first name',
  },
  uses: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Contact', ServiceSchema);
