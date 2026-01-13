import { Schema } from "mongoose";


export const RouteSchema = new Schema(
    {
        grade: { type: String, required: true },
        color: { type: String, required: true },
        routeSection: { type: String, required: true }, //Should I have wallSection on here or just wallSectionId?? 

        routeSectionId: { type: String, ref: 'RouteSection' },


        //should type be Schema.ObjectId??    //how does ref work when I am manually entering?? 





        gripType: { type: String, required: true },
        numberOfMoves: { type: Number, min: 0, max: 20 },
        style: { type: String, required: true },
        rating: { type: Number, min: 1, max: 5, }, //proably not in body of post request, add later like 'completed' in REST 

        setterId: { type: Schema.ObjectId, ref: 'Account' },
        //create setter account? Also add required back on... 

        completed: { type: Boolean, default: false, required: true }

    }, { timeStamps: true, toJSON: { virtuals: true } }

    //When we populate. It's like a getter. All we are doing is using the setterId to 'get' the setter as a whole and not just the id.


)

RouteSchema.virtual('setter', {


    localField: 'setterId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true

}







)

// RouteSchema.virtual('RouteSection', {

//     localField: 'routeSectionId',
//     foreignField: '_id',
//     ref: 'RouteSection'
//     justOne: true

// })

