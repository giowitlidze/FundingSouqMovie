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
    private profileSize: string = "w185"

    constructor(
        public id: number,
        public title: number,
        public releaseDate: string,
        public voteAverage: number,
        public overview: string,
        public imagePath: string
    ) { }

    get imgUrl() {
        return this.baseUrl + this.profileSize + this.imagePath;
    }
}