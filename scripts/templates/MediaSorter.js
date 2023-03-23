export class MediaSorter {

    constructor(data, lightboModal, photographerHandler) {
        this._data = data

        this.$mainWrapper = document.querySelector('main')

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('form__wrapper')

        this.lightboModal = lightboModal
        this.photographerHandler = photographerHandler

        this.value = ["Popularité", 'titre', "date"]
    }

    sortMedias(order) {
        const orderBy = order.toLowerCase()
        this.clearMedias()

        let sortedData = []

        if (orderBy !== "") {

            if (orderBy === "popularité") {

                sortedData = [...this._data].sort((a, b) => b.likes - a.likes)

            } else if (orderBy === "titre") {

                sortedData = [...this._data].sort((a, b) => a.title.toUpperCase().charCodeAt(0) - b.title.toUpperCase().charCodeAt(0))
            } else {
                sortedData = this._data
            }

            this.lightboModal.setMedias(sortedData)

            this.photographerHandler.displayGalery(sortedData, this.$mediasWrapper)
        }
    }


    clearMedias() {
        this.$mediasWrapper = document.querySelector('.media__wrapper')
        this.$mediasWrapper.innerHTML = ""
    }

    handleSelectorStyle() {
        const dropdown = document.querySelector('.sorter__dropdown');

        const select = dropdown.querySelector('.select')
        const iconOpen = dropdown.querySelector('.open-icon')
        const menu = dropdown.querySelector('.menu')
        const options = dropdown.querySelectorAll('.menu li')
        const selected = dropdown.querySelector('.selected')

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked')

            iconOpen.classList.toggle('open-icon-rotate')

            menu.classList.toggle('menu-open')

        })

        options.forEach(option => {
            option.addEventListener('click', () => {

                const previousSelected = selected.innerHTML;
                selected.innerHTML = option.innerHTML;
                option.innerHTML = previousSelected;

                select.classList.remove('select-clicked')

                iconOpen.classList.remove('open-icon-rotate')

                menu.classList.remove('menu-open')

                this.sortMedias(selected.innerHTML)
            })
        })

    }

    render() {
        const sorterSelector = `
        <div class="sorter__wrapper">
            <p>Trier par </p>
            <div class="sorter__dropdown">
                <div class="select">
                    <span class="selected">Date</span>
                    <i class="fas fa-chevron-left open-icon"></i>
                </div>
                <ul class="menu">
                    <li>Popularité</li>
                    <li>Titre</li>
                </ul>
            </div>
        </div>
        `
        this.$wrapper.innerHTML = sorterSelector
        this.$mainWrapper.appendChild(this.$wrapper)
        //this.onChangeSorter()
        this.handleSelectorStyle()
    }
}

