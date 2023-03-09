import { FetchPhotograph, FetchMedia } from "../api/FetchData.js";

class Photographer {
    constructor(){

        this.photographerId = new URLSearchParams(document.location.search).get('id')
        
        this.$mainWrapper = document.querySelector('main')

        this.photopraphersApi = new FetchPhotograph("../../data/photographers.json")
        this.mediasApi = new FetchMedia("../../data/photographers.json")

    }

    async main (){

        const photographerData = await this.photopraphersApi.getOne(this.photographerId)

        const mediasData = await this.mediasApi.getAllByPhotographerId(this.photographerId)
        console.log(photographerData)

        const headerTemplate = photographerData.createHeader()
        this.$mainWrapper.appendChild(headerTemplate)


    }
}

const app = new Photographer()
app.main()