import { AppState } from "@/AppState.js";
import { api } from "./AxiosService.js";
import { Route } from "@/models/Route.js";
import { logger } from "@/utils/Logger.js";
import { RouteSection } from "@/models/RouteSection.js";


class RoutesService {

    async getRoutes() {

        const response = await api.get('api/routes')
        console.log('🧗‍♀️', response.data)

        const routes = response.data.map(pojo => new Route(pojo))
        AppState.routes = routes




    }

    async getRoutesBySection(routeSectionId) {
        AppState.routes = []
        // const routeSection = AppState.activeRouteSection // Is this the right idea?? 
        const response = await api.get(`api/sections/${routeSectionId}/routes`) //what should the endpoint be? This is what is on PostIt reference.... 
        console.log('🍕', response.data)

        const routes = response.data.map(routeData => new Route(routeData))
        AppState.routes = routes

    }


    async getRouteSections() {

        const response = await api.get('api/sections')
        console.log('📖', response.data)

        const sections = response.data.map(pojo => new RouteSection(pojo))
        AppState.routeSections = sections
    }

    // async listRoutesBySection(routeSectionId) {

    //     // let selectedRoutes = AppState.routes.find((routes) => routeSection.id == routeSectionId)


    // }

    // async listRoutesBySection (routeSection) {

    //     let selectedRoutes = AppState.routes.find ((routes) => route.routeSection )
    // }



    // const response = await api.get(`api/routes?wallSectionId=${sectionId}`)

    async setActiveRoute(selectedRoute) {

        AppState.activeRoute = selectedRoute;
        logger.log('Route is now active')


    }

    async deleteRoute(routeId) {
        const response = await api.delete(`api/routes/${routeId}`)
        logger.log('Deleted route', response.data)

        const index = AppState.routes.findIndex(route => route.id == routeId)
        AppState.routes.splice(index, 1)






    }

    async createRoute(routeData) {

        const response = await api.post('api/routes', routeData)
        logger.log('CREATED ROUTE', response.data)

        const route = new Route(response.data)
        AppState.routes.push(route)
        return route






    }


}

export const routesService = new RoutesService()