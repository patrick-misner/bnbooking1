import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const ReviewSchema = new Schema(
  {
   creatorId: {type: ObjectId, required: true}, 
   providerId: {type: ObjectId, required: true},
   body: {type: String},
   rating: {type: Number, min: 1, max: 5, required: true},
   imgUrl: {type: String,}
  },
  { timestamps: true, toJSON: {virtuals: true}}

)
  ReviewSchema.virtual('provider',{
    localField: 'providerId',
    ref: "Provider",
    foreignField: '_id',
    justOne: true
  })

  ReviewSchema.virtual('creator', {
    localField: 'creatorId',
    ref: "Account",
    foreignField: '_id',
    justOne: true
  })
  

