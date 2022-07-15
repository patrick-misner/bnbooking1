import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

function closeCheck(open, close) {
  return open < close
}


// Schema for availability field on Provider
export const AvailabilitySchema = new Schema(
  {
    // TODO make sure close is larger than open
    day: { type: Number, min: 0, max: 6, required: true },
    open: { type: Number, min: 0, max: 24, required: true },
    close: { type: Number, min: 0, max: 24, required: true },
    oam: { type: String, required: true },
    cam: { type: String, required: true },

  }
)
export const ProviderSchema = new Schema(
  {
    coverImg: { type: String, required: true },
    bio: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    photos: [{ type: String }],
    name: { type: String, required: true },
    tags: [{ type: String, required: true }],
    availability: [AvailabilitySchema],
    rating: { type: Number, min: 1, max: 5, },
    creatorId: { type: ObjectId, required: true, ref: "Account" }

  },

  { timestamps: true, toJSON: { virtuals: true } }

)


ProviderSchema.virtual('creator', {
  localField: 'creatorId',
  ref: "Account",
  foreignField: '_id',
  justOne: true

})

