import { dbContext } from "../db/DbContext.js"


class RouteSectionsService {

    async getAllRouteSections() {
        const routeSections = await dbContext.RouteSections.find()

        return routeSections

    }

    async createRouteSection(routeSectionData) {

        const routeSection = await dbContext.RouteSections.create(routeSectionData)

        return routeSection
    }

    async deleteRouteSection(routeSectionId) {

        const routeSectionToDelete = await dbContext.RouteSections.findById(routeSectionId)

        if (!routeSectionToDelete) {

            throw new Error("There is no route section here. Bad id.")
        }

        await routeSectionToDelete.deleteOne()
        return (`${routeSectionToDelete} was deleted`)

    }

}

export const routeSectionsService = new RouteSectionsService()