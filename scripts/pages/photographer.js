import { FetchPhotograph } from "../api/FetchData.js";
import { PhotographerModel } from "../models/PhotographerModel.js";
import { PhotographerHeader } from "../templates/PhotographerHeader.js";

class Photographer {
    constructor(){

        this.photographerId = new URLSearchParams(document.location.search).get('id')
        this.$mainWrapper = document.querySelector('main')

        this.photopraphersApi = new FetchPhotograph("https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json")
    }

    async main (){

        const photographerData = await this.photopraphersApi.getOne(this.photographerId)
        const Photographer = new PhotographerModel(photographerData)

        const Template = new PhotographerHeader(Photographer)
        this.$mainWrapper.appendChild(Template.createCard())

    }
}

const app = new Photographer()
app.main()