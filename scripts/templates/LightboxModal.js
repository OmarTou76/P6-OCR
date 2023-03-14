export default class LightboxModal {

    constructor(medias) {
        this.medias = medias
        this.currentMedia = 0
    }

    nextMedia() {
        if (this.currentMedia === this.medias.length - 1) {
            this.currentMedia = 0
        } else {
            this.currentMedia++
        }

        this.$wrapper.remove()
        this.createLightbox()

    }

    previousMedia() {
        if (this.currentMedia === 0) {
            this.currentMedia = this.medias.length - 1
        } else {
            this.currentMedia--
        }

        this.$wrapper.remove()
        this.createLightbox()
    }

    onMove() {
        this.$wrapper.querySelectorAll('.arrow').forEach((arrow) => {
            if (arrow.classList.contains('arrow_back')) {
                arrow.addEventListener('click', () => this.previousMedia())
            } else {
                arrow.addEventListener('click', () => this.nextMedia())
            }
        })
    }

    onCloseModal() {

        const context = this

        this.$wrapper.querySelector('.close_btn')
            .addEventListener('click', () => {
                context.$wrapper.remove()
            })
    }

    createLightbox() {
        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('lightbox__modal')

        const content = `
            <div class="player__wrapper">
                <i class="fas fa-chevron-left arrow arrow_back"></i>
                <i class="fas fa-chevron-right arrow"></i>
                <i class="fas fa-times close_btn"></i> 
                ${this.medias[this.currentMedia].image ?
                `<img src="./assets/medias/${this.medias[this.currentMedia].photographerId}/${this.medias[this.currentMedia].image}" alt="${this.medias[this.currentMedia].title}" class="media__full" />` :
                `<video controls autoplay src="./assets/medias/${this.medias[this.currentMedia].photographerId}/${this.medias[this.currentMedia].video}" alt="${this.medias[this.currentMedia].title}" class="media__full"></video>`}
            </div>`

        this.$wrapper.innerHTML = content
        document.querySelector('main').appendChild(this.$wrapper)
        this.onCloseModal()
        this.onMove()

    }

    render(currentMedia) {
        this.currentMedia = this.medias.findIndex((medias) => medias.id === currentMedia)
        this.createLightbox()
    }
}

/* displayModal() {
    const context = this

    this.$wrapper.querySelector('.media__img')
        .addEventListener('click', () => {

            context.$lightBox.classList.add('lightbox__modal')


            const player = `
                <div class="player__wrapper">
                    <i class="fas fa-chevron-left arrow arrow_back"></i>
                    <i class="fas fa-chevron-right arrow"></i>
                    <i class="fas fa-times close_btn"></i>
                        <img src="./assets/medias/${this.photographerId}/${this.image}" alt="${this.title}" class="media__full" />
                </div>
            `

            context.$lightBox.innerHTML = player

            document.querySelector('main').appendChild(context.$lightBox)
            context.onCloseModal()

        })
} */