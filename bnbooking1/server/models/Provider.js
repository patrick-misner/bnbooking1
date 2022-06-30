import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



// Schema for availability field on Provider
export const AvailabilitySchema = new Schema(
  {
    day: {type: Number, min: 0, max: 6, required: true },
    open: {type: Number, min: 0, max: 24, required: true},
    close: {type: Number, min:0, max: 24, required: true}
  }
  )
export const ProviderSchema = new Schema(
  {
    coverImg: { type: String, required: true},
    bio: { type: String, required: true},
    description: { type: String, required: true},
    location: {type: String, required: true},
    photos: [{type: String}],
    name: {type: String},
    tags: [{type: String, required: true}],
    availability: [AvailabilitySchema],
    rating: {type: Number, min: 1, max: 5, required: true},
    creatorId: {type: ObjectId, required: true, ref: "Account"}

  },
  
  { timestamps: true, toJSON: {virtuals: true}}
  
  )


    ProviderSchema.virtual('creator', {
      localField: 'creatorId',
      ref: "Account",
      foreignField: '_id',
      justOne: true

    })

