
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

    get likes() {
        return this._data.likes
    }

    get price() {
        return this._data.price
    }

    get photographerId() {
        return this._data.photographerId
    }

}


export class ImageModel extends MediaModel {
    constructor(data) {
        super(data)
    }

    createMediaCard() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('media__article');
        const card = `
            <div class="media__img">
                <img src="./assets/medias/${this.photographerId}/${this.image}" alt="${this.title}" />
            </div>
            <div class="media__info">
                <div id="name">
                    ${this.title}
                </div>
                <div>
                    <span>${this.likes}</span>
                    <i class="fa-sharp fa-solid fa-heart"></i>
                </div>    
            </div>
        `;

        $wrapper.innerHTML = card;


        return $wrapper;
    }

    get image() {
        return this._data.image
    }
}

export class VideoModel extends MediaModel {
    constructor(data) {
        super(data)
    }

    createMediaCard() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('media__article');

        const card = `
            <div class="media__img">
                <img height="50" width="50" src="./assets/medias/${this.photographerId}/${this.video}" alt="${this.name}" />
            </div>
            <div class="media__info">
                <div id="name">
                    ${this.name}
                </div>
                <div>
                    <span>${this.like}</span>
                    <i class="fa-sharp fa-solid fa-heart"></i>
                </div>    
            </div>
        `;

        $wrapper.innerHTML = card;


        return $wrapper;
    }

    get video() {
        return this._data.video
    }
}