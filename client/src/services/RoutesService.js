import { AppState } from "@/AppState.js";
import { api } from "./AxiosService.js";
import { Route } from "@/models/Route.js";
import { logger } from "@/utils/Logger.js";


class RoutesService {

    async getRoutes() {

        const response = await api.get('api/routes')
        console.log('🧗‍♀️', response.data)

        const routes = response.data.map(pojo => new Route(pojo))
        AppState.routes = routes




    }

    async getRoutesBySection(sectionId) {
        AppState.routes = []
        // const routeSection = AppState.activeRouteSection // Is this the right idea?? 
        const response = await api.get(`api/sections/wallSectionId=${sectionId}/routes`) //what should the endpoint be? 
        console.log('🍕', response.data)

        const routes = response.data.map(routeData => new Route(routeData))
        AppState.routes = routes

    }

    // const response = await api.get(`api/routes?wallSectionId=${sectionId}`)

    async setActiveRoute(selectedRoute) {

        AppState.activeRoute = selectedRoute;
        logger.log('Route is now active')


    }


}

export const routesService = new RoutesService()