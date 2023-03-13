import { FetchPhotograph, FetchMedia } from "../api/FetchData.js";
import { PhotographerLikesCounter } from "../photographerLikes/Counter.js";
import { PhotographerLikesSubject } from "../photographerLikes/Subject.js";


class Photographer {

    constructor() {
        this.photographerId = new URLSearchParams(document.location.search).get('id')

        this.$mainWrapper = document.querySelector('main')

        this.$mediaWrapper = document.createElement('div')
        this.$mediaWrapper.classList.add('media__wrapper')


        this.photopraphersApi = new FetchPhotograph("./data/photographers.json")
        this.mediasApi = new FetchMedia("./data/photographers.json")

        // Observer qui gère le nombre total de likes
        this.likesSubject = new PhotographerLikesSubject()
        this.likesCounter = new PhotographerLikesCounter()
        this.likesSubject.subscribe(this.likesCounter)
    }

    async main() {

        const photographerData = await this.photopraphersApi.getOne(this.photographerId)
        const headerTemplate = photographerData.createHeader()
        const aboutPhotographer = photographerData.displayLikesAndPrices()
        document.body.appendChild(aboutPhotographer)


        const mediasData = await this.mediasApi.getAllByPhotographerId(this.photographerId, this.likesSubject, this.likesCounter)


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