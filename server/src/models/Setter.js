import { Schema } from "mongoose";


export const SetterSchema = new Schema({

    name: { type: String, required: true },
    feedbackId: { type: Schema.ObjectId, ref: 'Account' }
    // really have no idea on the above line, don't think it's right, will have to ask Jake...



},

    { timeStamps: true, toJSON: { virtuals: true } })

SetterSchema.virtual('feedback', {

    localField: 'feedbackId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true



}





)