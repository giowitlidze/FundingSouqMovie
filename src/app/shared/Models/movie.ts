const baseUrl: string = "http://image.tmdb.org/t/p/"
const lowResolution: string = "w185"
const highResolution: string = "w780"
const logoResolution: string = "w92"
const backgroundPoster: string = "w1280"

export interface IGenre {
    id: number,
    name: string
}

export class ProductionCompanies {
    constructor(
        public id: number = 0,
        public logoName: string,
        public name: string,
        public originCountry: string,
    ) { }

    get logoPath() {
        return baseUrl + logoResolution + this.logoName
    }

}

export class Movie {
    constructor(
        public id: number = 0,
        public title?: string,
        public releaseDate?: string,
        public voteAverage: number = 0,
        public overview?: string,
        public imageName?: string,
        public voteCount: number = 0,
        public genres: Array<IGenre> = [],
        public posterName?: string,
        public productionCompanies: Array<ProductionCompanies> = [],
    ) { }

    /**დაბალი გაფართოების სურათი ფილმების სიისათვის. */
    get imgUrl(): string {
        return baseUrl + lowResolution + this.imageName;
    }

    /**მაღალი გაფართოების სურათი ფილმის დეტალური ნახვისას. */
    get detailedImgUrl(): string {
        return baseUrl + backgroundPoster + this.imageName;
    }

    /**პოსტერი დეტალური ინფორმაციისთვის */
    get posterPath(): string {
        return baseUrl + highResolution + this.posterName;
    }

    /**ფილმის გამოშვების წელი */
    get releaseYear(): string {
        return (this.releaseDate == null) ? "" : this.releaseDate.split("-")[0];
    }
}