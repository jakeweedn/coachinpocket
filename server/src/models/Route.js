import { Schema } from "mongoose";


export const RouteSchema = new Schema(
    {
        grade: { type: Number, min: 0, max: 20, required: true },
        color: { type: String, required: true },
        wallSection: { type: String, required: true },

        gripType: { type: String, required: true },
        numberOfMoves: { type: Number, min: 0, max: 20 },
        style: { type: String, required: true },
        rating: { type: Number, min: 1, max: 5, required: true },

        setterId: { type: Schema.ObjectId, ref: 'Account', required: true }

    }, { timeStamps: true, toJSON: { virtuals: true } }


)

RouteSchema.virtual('setter', {


    localField: 'setterId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true

}





)

