import { HandleForm } from "../FormController/HandleForm.js"

export class ModalForm {

    constructor(name) {
        this.name = name

        this.$wrapper = document.createElement("div")
        this.$wrapper.classList.add('contact_modal')
        this.$modal = document.createElement('div')
        this.$modal.classList.add('modal')
    }

    closeModal() {
        this.$modal.querySelector('.closeModal')
            .addEventListener('click', () => {
                this.$wrapper.remove()
            })
    }

    onSubmit() {
        new HandleForm("contactForm", this.displayValidation.bind(this))
    }

    displayValidation() {
        this.$modal.innerHTML = `
            <div class="modal__header">
                <i class="fas fa-times closeModal"></i> 
            </div>
            <div class="modal__validation">
                <p>Votre message à bien été envoyé a ${this.name}.</p>
            </div>
        `
        this.closeModal()
    }

    createModal() {
        const modal = `
            <div class="modal__header">
                <h2>Contactez-moi</h2>
                <h3>${this.name}</h3>
                <i class="fas fa-times closeModal"></i> 
            </div>
            <form id="contactForm">
                <div class="formData">
                    <label for="firstName">Prénom</label>
                    <input id="firstName" name="firstName" type="text" />
                </div>
                <div class="formData">
                    <label for="lastName">Nom</label>
                    <input id="lastName" name="lastName" type="text" />
                </div>
                <div class="formData">
                    <label for"userEmail">Email</label>
                    <input id="userEmail" name="userEmail"  />
                </div>
                <div class="formData">
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