import { PhotographerModel } from "../models/PhotographerModel.js";
import { MediaModel } from "../models/MediaModel.js";

class FetchData {
    constructor(url){
        this._url = url
    }

    async get(){
        try {
            const data = await fetch(this._url)
            const response = await data.json()
            return response
        } catch (error) {
            console.error(error)
        }
    }

}

export class FetchPhotograph extends FetchData {
    constructor(url){
        super(url)
    }

    async getAll(){
        const data = await this.get()
        return data.photographers.map(photographerData => new PhotographerModel(photographerData))
    }

    async getOne(id){
        const allPhotograpers = await this.getAll()
        const photographer = allPhotograpers.find(person => person.id === parseInt(id))

        return new PhotographerModel(photographer)
    }
}

export class FetchMedia extends FetchData {
    constructor(url){
        super(url)
    }

    async getAllByPhotographerId(id){

        const data = await this.get()
        const medias = data.media.filter(media => media.photographerId === parseInt(id))

        return medias.map(media => MediaModel.mediaFactory(media))
    }
}