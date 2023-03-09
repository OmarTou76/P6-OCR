export class PhotographerHeader {
    
    constructor(photographer) {
        this._photographer = photographer;
    }
    
    createCard() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('photograph-header');

        const card = `
        <div class="photographer-header__info">
            <h2 id="name">${this._photographer.name}</h2>
            <p id="location">${this._photographer.city}, ${this._photographer.country}</p>
            <p id="tagline">${this._photographer.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div class="photographer_section__img">
                <img src="${this._photographer.portrait}" alt="${this._photographer.name}" />
            </div>
        `;

        $wrapper.innerHTML = card;
        
        return $wrapper;
    }
}


