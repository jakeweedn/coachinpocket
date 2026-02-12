import { dbContext } from "../db/DbContext.js"


class RouteSectionsService {

    async getAllRouteSections() {
        const routeSections = await dbContext.RouteSections.find()

        return routeSections

    }

    async getRouteSectionById(routeSectionId) {

        const routeSectionToGet = await dbContext.RouteSections.findById(routeSectionId)

        if (!routeSectionToGet) {

            throw new Error("There is no route section here. Bad id")
        }

        return routeSectionToGet
    }

    async createRouteSection(routeSectionData) {

        const routeSection = await dbContext.RouteSections.create(routeSectionData)

        return routeSection
    }

    async deleteRouteSection(routeSectionId, userId) {

        const routeSectionToDelete = await dbContext.RouteSections.findById(routeSectionId)

        if (!routeSectionToDelete) {

            throw new Error("There is no route section here. Bad id.")
        }

        await routeSectionToDelete.deleteOne()
        return (`${routeSectionToDelete} was deleted`)

    }

}

export const routeSectionsService = new RouteSectionsService()