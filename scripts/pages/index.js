import { FetchPhotograph } from "../api/FetchData.js";
import { Photographer } from "../models/Photographer.js";
import { PhotographerCard } from "../templates/PhotographerCard.js";

class Index {
    constructor(){
        this.$photographersSection = document.querySelector(".photographer_section");
        this.photopraphersApi = new FetchPhotograph("https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json")
    }
    
    async main(){
        const photographersData = await this.photopraphersApi.getAll()

        const Photographers = photographersData.map(photographerData => new Photographer(photographerData))

        Photographers.forEach(person => {
            const Template = new PhotographerCard(person)
            this.$photographersSection.appendChild(Template.createCard())
        })
    }
}

const app = new Index()
app.main()