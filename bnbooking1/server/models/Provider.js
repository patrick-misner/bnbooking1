import mongoose from 'mongoose'
const Schema = mongoose.Schema



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
    availability: [{type: AvailabilitySchema, required: true}]

  })


