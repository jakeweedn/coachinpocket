import { Schema } from "mongoose";


export const WatcherSchema = new Schema({
    accountId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    routeSectionId: { type: Schema.ObjectId, required: true, ref: 'RouteSection' }

    //routeSection or route?? My guess is routeSection... 


},
    {
        timestamps: true,
        toJSON: { virtuals: true }

    }
)

WatcherSchema.virtual('profile', {
    localField: 'accountId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true


})

WatcherSchema.virtual('routeSection', {
    localField: 'routeSectionId',
    ref: 'RouteSection',
    foreignField: '_id',
    justOne: true


})