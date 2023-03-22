import { ModalForm } from "../templates/ModalForm.js";

export class PhotographerModel {
    constructor(data) {
        this._data = data
        this.modalForm = new ModalForm(this.name)
        this.$headerWrapper = document.createElement('div')
        this.$headerWrapper.classList.add('photograph-header');
    }

    displayLikesAndPrices() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add("about__photographer")

        const card = `
                <div class="photographer__likes">
                    <span class="likes_count"></span>
                    <i class="fas fa-heart icon_liked"></i>
                </div>
                <span class="photographer__price">${this.price}€ / jour</span>
            `;

        $wrapper.innerHTML = card

        return $wrapper
    }

    openFormModal() {
        this.$headerWrapper.querySelector('.contact_button')
            .addEventListener('click', () => this.modalForm.createModal())
    }


    createHeader() {

        const card = `
        <div class="photographer-header__info">
            <h2 class="name">${this.name}</h2>
            <p class="location">${this.city}, ${this.country}</p>
            <p class="tagline">${this.tagline}</p>
        </div>
        <button class="contact_button">Contactez-moi</button>
        <div class="photographer_section__link">
            <img src="./assets/photographers/${this.portrait}" alt="${this.name}"/>
        </div>
        `;

        this.$headerWrapper.innerHTML = card;
        this.openFormModal()

        return this.$headerWrapper;
    }

    createCard() {

        const $wrapper = document.createElement('div');
        $wrapper.classList.add('photographer__article');

        const card = `
            <a class="photographer_section__link" href="./photographer.html?id=${this.id}" role="link" aria-label="Visitez la page de ${this.name}" >
                <img src="./assets/photographers/${this.portrait}" alt="Photo de profil de ${this.name}" />
                <h2 class="name">${this.name}</h2>
            </a>
            <div class="photographer_section__info">
                <p class="location">${this.city}, ${this.country}</p>
                <p class="tagline">${this.tagline}</p>
                <p class="price">${this.price}€/jour</p>
            </div>
        `;

        $wrapper.innerHTML = card;

        return $wrapper;
    }


    get name() {
        return this._data.name
    }

    get tagline() {
        return this._data.tagline
    }
    get id() {
        return this._data.id
    }

    get city() {
        return this._data.city
    }

    get country() {
        return this._data.country
    }

    get price() {
        return this._data.price
    }

    get portrait() {
        return this._data.portrait
    }

}