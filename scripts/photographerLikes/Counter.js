export class PhotographerLikesCounter {

    constructor() {
        this._$likesCount = null
        this._count = 0
    }

    getInitialCount(data) {
        const initialCount = data.reduce((accumulator, current) => accumulator += current.likes, 0)

        this._$likesCount = document.querySelector('.likes_count')
        this._$likesCount.innerHTML = initialCount

        this._count = initialCount
    }

    update(action) {
        if (action === 'INC') {
            this._count++
        } else if (action === 'DEC') {
            this._count--
        } else {
            throw "Unknow action"
        }
        this._$likesCount.innerHTML = this._count
    }
}