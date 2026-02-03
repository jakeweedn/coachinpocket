

export class Route {

    constructor(data) {

        this.id = data.id //when do I use underscore?? 

        this.creatorId = data.creatorId //newly added
        this.creator = data.creator

        //might need to modify the above line... 


        this.grade = data.grade
        this.color = data.color
        this.routeSection = data.routeSection
        this.routeSectionId = data.routeSectionId

        this.gripType = data.gripType
        this.numberOfMoves = data.numberOfMoves
        this.style = data.style






    }
}