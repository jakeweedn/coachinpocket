import { Schema } from "mongoose";


export const RouteLogSchema = new Schema({

    userId: { type: Schema.ObjectId, ref: 'Account', required: true },
    feedbackId: { type: Schema.ObjectId, ref: 'Account', required: true }
    // really have no idea on the above line, don't think it's right, will have to ask Jake...



},
    { timeStamps: true, toJSON: { virtuals: true } })

RouteLogSchema.virtual('feedback', {

    localField: 'feedbackId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true

})

