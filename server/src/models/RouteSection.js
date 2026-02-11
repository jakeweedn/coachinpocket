import { Schema } from "mongoose";


export const RouteSectionSchema = new Schema({
    name: { type: String, required: true },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }



},

    {
        timestamps: true,
        toJSON: { virtuals: true }
    })

RouteSectionSchema.virtual('creator', {

    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true


})

RouteSectionSchema.virtual('watcherCount', {

    localField: '_id',
    ref: 'Watcher',
    foreignField: 'routeSectionId',
    justOne: false,
    count: true





})