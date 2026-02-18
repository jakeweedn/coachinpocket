import { Schema } from "mongoose";


export const UserRouteSchema = new Schema({

    accountId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    //id of the user completing
    routeId: { type: Schema.ObjectId, required: true, ref: 'Route' }
    //id of the route that was completed




},

    {

        timestamps: true,
        toJSON: { virtuals: true }

    }


)

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