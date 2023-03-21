import { IImage } from "./typeImage"

export interface IFetch {
    hits: IImage[],
    total: number,
    totalHits: number
}