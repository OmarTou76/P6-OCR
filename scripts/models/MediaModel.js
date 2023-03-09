
export class MediaModel {

    static mediaFactory(data) {
        if (data.image) {
            return new ImageModel(data)
        } else if (data.video) {
            return new VideoModel(data)
        }
    }

    constructor(data) {
        this._data = data
    }

    onLike() {
        this._data.like++
    }

    onDislike() {
        this._data.like--
    }

    get title() {
        return this._data.title
    }

    get date() {
        return this._data.date
    }
    get id() {
        return this._data.id
    }

    get like() {
        return this._data.like
    }

    get price() {
        return this._data.price
    }


}


export class ImageModel extends MediaModel {
    constructor(data) {
        super(data)
    }

    get image() {
        return this._data.image
    }
}

export class VideoModel extends MediaModel {
    constructor(data) {
        super(data)
    }

    get video() {
        return this._data.video
    }
}