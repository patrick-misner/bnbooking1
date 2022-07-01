import mongoose from "mongoose";
const Schema =  mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const AppointmentSchema = new Schema({
  providerId: {type: ObjectId, required: true, ref:'Provider'},
  accountId: { type: ObjectId, required: true, ref:'Account'},
  date: {type: Date,},
  startTime:{type: Number, required: true},
  duration: {type: Number, default: 1}
},{timestamps: true, toJSON:{virtuals: true}})


AppointmentSchema.virtual('account',{
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
AppointmentSchema.virtual('provider',{
  localField: 'providerId',
  ref: 'Provider',
  foreignField: '_id',
  justOne: true
})