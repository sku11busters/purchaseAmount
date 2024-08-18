import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly originalName: string,
        public readonly year: number,
        public readonly country: string,
        public readonly slogan: string,
        public readonly genre: string,
        public readonly duration: number,
        public readonly price: number
    ) {}
}