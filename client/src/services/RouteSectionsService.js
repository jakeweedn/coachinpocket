import { RouteSection } from "@/models/RouteSection.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"


class RouteSectionsService {

    async getRouteSections() {

        const response = await api.get('api/sections')
        console.log('🍟', response.data)

        const routeSections = response.data.map(pojo => new RouteSection(pojo))
        AppState.routeSections = routeSections



    }




}

export const routeSectionsService = new RouteSectionsService()