import { FetchPhotograph } from "../api/FetchData.js";

class Index {
    constructor() {

        this.$photographersSection = document.querySelector(".photographer_section");

        this.photopraphersApi = new FetchPhotograph("https://raw.githubusercontent.com/OmarTou76/P6-OCR/main/data/photographers.json");

    }

    async main() {

        const photographersData = await this.photopraphersApi.getAll()

        photographersData.forEach(person => {
            const template = person.createCard()
            this.$photographersSection.appendChild(template)
        })
    }

}

const app = new Index()
app.main()