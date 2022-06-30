import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { AppointmentsSchema } from "../models/Appointment";
import { ProviderSchema } from "../models/Provider";
import { ReviewSchema } from "../models/Review";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Providers = mongoose.model('Provider', ProviderSchema);
  Reviews = mongoose.model('Review', ReviewSchema);

  Appointments = mongoose.model('Appointment', AppointmentsSchema)
}

export const dbContext = new DbContext()
