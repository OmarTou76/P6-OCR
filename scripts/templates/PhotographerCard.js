export class PhotographerCard {
    
    constructor(photographer) {
        this._photographer = photographer;
    }
    
    createCard() {
        const $wrapper = document.createElement('a');
        $wrapper.classList.add('photographer__article');
        $wrapper.setAttribute('href', `./photographer.html?id=${this._photographer.id}`)

        const card = `
            <div class="photographer_section__img">
                <img src="${this._photographer.portrait}" alt="${this._photographer.name}" />
            </div>
            <div class="photographer_section__info">
                <h2 id="name">${this._photographer.name}</h2>
                <p id="location">${this._photographer.city}, ${this._photographer.country}</p>
                <p id="tagline">${this._photographer.tagline}</p>
                <p id="price">${this._photographer.price}€/jour</p>
            </div>
        `;

        $wrapper.innerHTML = card;
        
        return $wrapper;
    }
}


