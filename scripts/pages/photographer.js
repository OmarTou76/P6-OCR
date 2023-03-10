import { FetchPhotograph, FetchMedia } from "../api/FetchData.js";

class Photographer {
    constructor() {

        this.photographerId = new URLSearchParams(document.location.search).get('id')

        this.$mainWrapper = document.querySelector('main')
        this.$mediaWrapper = document.createElement('div')
        this.$mediaWrapper.classList.add('media__wrapper')

        this.photopraphersApi = new FetchPhotograph("../../data/photographers.json")
        this.mediasApi = new FetchMedia("../../data/photographers.json")

    }

    async main() {

        const photographerData = await this.photopraphersApi.getOne(this.photographerId)
        const headerTemplate = photographerData.createHeader()

        const mediasData = await this.mediasApi.getAllByPhotographerId(this.photographerId)
        mediasData.forEach(media => {
            const template = media.createMediaCard()
            this.$mediaWrapper.appendChild(template)
        })

        this.$mainWrapper.appendChild(headerTemplate)
        this.$mainWrapper.appendChild(this.$mediaWrapper)

    }
}

const app = new Photographer()
app.main()