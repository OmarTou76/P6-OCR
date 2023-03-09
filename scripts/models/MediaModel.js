export class MediaModel {
    constructor(data){
        this._data = data
    }

    get title(){
        return this._data.title
    }

    get date(){
        return this._data.date
    }
    get id(){
        return this._data.id
    }

    get line(){
        return this._data.like
    }

    get price(){
        return this._data.price
    }

    get image(){
        return `/assets/medias/${this._data.id}/${this._data.image}`
    }

}