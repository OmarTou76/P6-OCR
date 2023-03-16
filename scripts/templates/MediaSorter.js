export class MediaSorter {

    constructor(data, lightboModal) {
        this._data = data

        this.$mainWrapper = document.querySelector('main')

        this.$wrapper = document.createElement('div')

        this.lightboModal = lightboModal
    }

    sortMedias(orderBy) {

        this.clearMedias()

        if (orderBy !== "") {

            if (orderBy === "POPULAR") {

                const sortedData = [...this._data].sort((a, b) => b.likes - a.likes)
                this.lightboModal.setMedias(sortedData)

                sortedData.forEach(media => {
                    const template = media.createMediaCard()
                    this.$mediasWrapper.appendChild(template)
                })

            } else if (orderBy === "DATE") {

                const sortedData = [...this._data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                this.lightboModal.setMedias(sortedData)
                console.log(sortedData, this._data)
                sortedData.forEach(media => {
                    const template = media.createMediaCard()
                    this.$mediasWrapper.appendChild(template)
                })

            } else if (orderBy === "TITLE") {

                const sortedData = [...this._data].sort((a, b) => a.title.toUpperCase().charCodeAt(0) - b.title.toUpperCase().charCodeAt(0))
                this.lightboModal.setMedias(sortedData)

                sortedData.forEach(media => {
                    const template = media.createMediaCard()
                    this.$mediasWrapper.appendChild(template)
                })
            }
        } else {

            this.lightboModal.setMedias(this._data)

            this._data.forEach(media => {
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