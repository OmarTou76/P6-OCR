export class ModalForm {

    constructor(name) {
        this.name = name

        this.$wrapper = document.createElement("div")
        this.$wrapper.classList.add('contact_modal')
        this.$modal = document.createElement('div')
        this.$modal.classList.add('modal')
    }

    closeModal() {
        this.$modal.querySelector('#closeModal')
            .addEventListener('click', () => {
                this.$wrapper.remove()
            })
    }

    onSubmit() {
        this.$modal.querySelector('#contactForm')
            .addEventListener('submit', (e) => {
                e.preventDefault()

            })
    }

    createModal() {
        const modal = `
            <div class="modal__header">
                <h2>Contactez-moi</h2>
                <h3>${this.name}</h3>
                <img src="./assets/icons/close.svg" id="closeModal" />
            </div>
            <form id="contactForm">
                <div>
                    <label for="firstName">Prénom</label>
                    <input id="firstName" name="firstName" type="text" />
                </div>
                <div>
                    <label for="lastName">Nom</label>
                    <input id="lastName" name="lastName" type="text" />
                </div>
                <div>
                    <label for"userEmail">Email</label>
                    <input id="userEmail" name="userEmail"  />
                </div>
                <div>
                    <label for="messageContent">Votre message</label>
                    <textarea  name="messageContent" id="messageContent" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" class="contact_button">Envoyer</button>
            </form>
        `
        this.$modal.innerHTML = modal
        this.$wrapper.appendChild(this.$modal)
        document.body.appendChild(this.$wrapper)
        this.closeModal()
        this.onSubmit()
    }
}