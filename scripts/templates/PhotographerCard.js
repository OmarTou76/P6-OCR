export class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer;
    }
    
    createCard() {
        const $article = document.createElement('article');
        $article.classList.add('photographer__article');

        const card = `
            <div class="photographer__article__img">
                <img src="${this._photographer.portrait}" alt="${this._photographer.name}" />
            </div>
            <div class="photographer__article__info">
                <h2>${this._photographer.name}</h2>
                <p>${this._photographer.city}, ${this._photographer.country}</p>
                <p>${this._photographer.price}</p>
            </div>
        `;

        $article.innerHTML = card;
        
        return $article;
    }
}


