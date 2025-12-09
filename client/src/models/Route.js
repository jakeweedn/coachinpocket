

export class Route {

    constructor(data) {

        this.id = data._id
        this.grade = data.grade
        this.color = data.color
        // this.wallSection = data.wallSection
        this.wallSectionId = data._wallSectionId

        this.gripType = data.gripType
        this.numberOfMoves = data.numberOfMoves
        this.style = data.style




    }
}