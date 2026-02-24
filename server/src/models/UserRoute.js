import { Schema } from "mongoose";


export const UserRouteSchema = new Schema({

    accountId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    //id of the user completing
    routeId: { type: Schema.ObjectId, required: true, ref: 'Route' },
    //id of the route that was completed

    completed: { type: Boolean, default: false, required: true },
    //We'll take the completed off later if we need to.
    attempts: { type: Number }

    // Yes it looks like this is what I should do. However, I still have two questions... 1. Why no completed? And 2. What does it mean for users to 'have' an object as Mick mentioned? How to implement this into code?? 









},

    {

        timestamps: true,
        toJSON: { virtuals: true }

    }


)

//Might not really need the below virtual... see inspire video...  
UserRouteSchema.virtual('profile', {

    localField: 'accountId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true



})


UserRouteSchema.virtual('route', {

    localField: 'routeId',
    ref: 'Route',
    foreignField: '_id',
    justOne: true

})

//Really justOne: true for virtuals? Well, that's how the WatcherSchema is, even though it seems weird. 