export class MediaSorter {

    constructor(data, lightboModal) {
        this._data = data

        this.$mainWrapper = document.querySelector('main')

        this.$wrapper = document.createElement('div')

        this.lightboModal = lightboModal
    }

    sortMedias(orderBy) {

        this.clearMedias()

        let sortedData = []

        if (orderBy !== "") {

            if (orderBy === "POPULAR") {

                sortedData = [...this._data].sort((a, b) => b.likes - a.likes)

            } else if (orderBy === "TITLE") {

                sortedData = [...this._data].sort((a, b) => a.title.toUpperCase().charCodeAt(0) - b.title.toUpperCase().charCodeAt(0))
            } else {
                sortedData = this._data
            }

            this.lightboModal.setMedias(sortedData)

            sortedData.forEach(media => {
                const template = media.createMediaCard()
                this.$mediasWrapper.appendChild(template)
            })
        }
    }

    onChangeSorter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                this.sortMedias(e.target.value)
            })
    }

    clearMedias() {
        this.$mediasWrapper = document.querySelector('.media__wrapper')
        this.$mediasWrapper.innerHTML = ""
    }

    render() {
        const sorterForm = `
        <form action="#" class="sorter-form">
            <label for="sorter-select">Triez par date de sortie : </label>
            <select name="sorter-select" id="sorter-select">
                <option value="DATE">Date</option>
                <option value="POPULAR">Popularité</option>
                <option value="TITLE">Titre</option>
            </select>
        </form>
    `
        this.$wrapper.innerHTML = sorterForm
        this.$mainWrapper.appendChild(this.$wrapper)
        this.onChangeSorter()
    }
}