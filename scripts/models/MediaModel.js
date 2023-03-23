
export class MediaModel {

    static mediaFactory(data, likesCounter, lighboxModal) {
        if (data.image) {
            return new ImageModel(data, likesCounter, lighboxModal)
        } else if (data.video) {
            return new VideoModel(data, likesCounter, lighboxModal)
        }
    }

    constructor(data) {
        this._data = data
    }


    handleLikesButton() {

        const context = this

        this.$wrapper.querySelector('#likes')
            .addEventListener('click', function () {

                if (this.classList.contains('icon_liked')) {
                    context.onDislike(this)
                } else {
                    context.onLike(this)
                }

                const likesCount = context.$wrapper.querySelector('#likes_count')
                likesCount.innerHTML = context._data.likes

                context.likesCounter.update()
            })

    }

    onLike(element) {
        element.classList.remove('icon_disliked')
        element.classList.add('icon_liked')

        this._data.likes++
    }

    onDislike(element) {
        element.classList.remove('icon_liked')
        element.classList.add('icon_disliked')

        this._data.likes--
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
    constructor(data, likesCounter, lightboxModal) {
        super(data)
        this.likesCounter = likesCounter
        this.lightboxModal = lightboxModal
    }

    displayLightbox() {
        const context = this

        this.$wrapper.querySelector('.media__img')
            .addEventListener('click', () => {
                context.lightboxModal.render(context.id)
            })
    }

    createMediaCard() {
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('media__article');

        const card = `
            <div class="media__img">
                <img src="./assets/medias/${this.photographerId}/${this.image}" alt="${this.title}" />
            </div>
            <div class="media__info">
                <div id="title">
                    ${this.title}
                </div>
                <div class="media__likes">
                    <span id="likes_count">${this.likes}</span>
                    <i id="likes" class="fas fa-heart icon_disliked"></i>
                </div>    
            </div>
        `;

        this.$wrapper.innerHTML = card;
        this.handleLikesButton()
        this.displayLightbox()

        return this.$wrapper;
    }

    get image() {
        return this._data.image
    }
}

export class VideoModel extends MediaModel {
    constructor(data, likesCounter, lightboxModal) {
        super(data)
        this.likesCounter = likesCounter
        this.lightboxModal = lightboxModal
    }

    displayLightbox() {
        const context = this

        this.$wrapper.querySelector('.media__img')
            .addEventListener('click', () => {
                context.lightboxModal.render(context.id)
            })
    }

    createMediaCard() {
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('media__article');

        const card = `
            <div class="media__img">
                <video src="./assets/medias/${this.photographerId}/${this.video}" alt="${this.title}" /></video>
                <i class="fas fa-play player-icon"></i>
            </div>
            <div class="media__info">
                <div id="title">
                    ${this.title}
                </div>
                <div class="media__likes">
                    <span id="likes_count">${this.likes}</span>
                    <i id="likes" class="fas fa-heart icon_disliked"></i>
                </div>    
            </div>
        `;

        this.$wrapper.innerHTML = card;
        this.handleLikesButton()
        this.displayLightbox()

        return this.$wrapper;
    }

    get video() {
        return this._data.video
    }
}