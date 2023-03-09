export class PhotographerModel {
    constructor(data){
        this._data = data
    }

    get name(){
        return this._data.name
    }

    get tagline(){
        return this._data.tagline
    }
    get id(){
        return this._data.id
    }

    get city(){
        return this._data.city
    }

    get country(){
        return this._data.country
    }

    get price(){
        return this._data.price
    }

    get portrait(){
        return `/assets/photographers/${this._data.portrait}`
    }

}