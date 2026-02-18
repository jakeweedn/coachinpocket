import { dbContext } from "../db/DbContext.js"


class WatchersService {

    async createWatcher(watcherData) {

        const watcher = await dbContext.Watchers.create(watcherData)
        await watcher.populate('profile', 'name picture')
        await watcher.populate('routeSection')

        return watcher

    }

    async getWatchersByRouteSectionId(routeSectionId) {

        const watchers = await dbContext.Watchers.find({ routeSectionId: routeSectionId })

        //Do I need any populate like in the reference? 
        return watchers




    }


}

export const watchersService = new WatchersService() 