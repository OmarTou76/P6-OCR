export class PhotographerModel {
    constructor(data) {
        this._data = data
    }

    createHeader() {
        
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('photograph-header');

        const card = `
        <div class="photographer-header__info">
            <h2 id="name">${this.name}</h2>
            <p id="location">${this.city}, ${this.country}</p>
            <p id="tagline">${this.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div class="photographer_section__img">
                <img src="./assets/photographers/${this.portrait}" alt="${this.name}"/>
            </div>
        `;

        $wrapper.innerHTML = card;
        
        return $wrapper;
    }

    createCard() {

        const $wrapper = document.createElement('a');
        $wrapper.classList.add('photographer__article');
        $wrapper.setAttribute('href', `./photographer.html?id=${this.id}`)

        const card = `
            <div class="photographer_section__img">
                <img src="./assets/photographers/${this.portrait}" alt="${this.name}" />
            </div>
            <div class="photographer_section__info">
                <h2 id="name">${this.name}</h2>
                <p id="location">${this.city}, ${this.country}</p>
                <p id="tagline">${this.tagline}</p>
                <p id="price">${this.price}€/jour</p>
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