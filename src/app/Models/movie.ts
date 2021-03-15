// export interface Movie {
//     id: number,
//     title: number,
//     release_date: string,
//     vote_average: number,
//     overview: string,
//     imgUrl: string
// }

export class Movie implements Movie {
    private baseUrl: string = "http://image.tmdb.org/t/p/"
    private lowResolution: string = "w185"
    private highResolution: string = "w780"

    constructor(
        public id: number,
        public title: number,
        public releaseDate: string,
        public voteAverage: number,
        public overview: string,
        public imageName: string,
        public voteCount: number
    ) { }

    /**დაბალი გაფართოების სურათი ფილმების სიისათვის. */
    get imgUrl() {
        return this.baseUrl + this.lowResolution + this.imageName;
    }

    /**მაღალი გაფართოების სურათი ფილმის დეტალური ნახვისას. */
    get detailedImgUrl() {
        return this.baseUrl + this.highResolution + this.imageName;
    }
}