class FetchData {
    constructor(url){
        this._url = url

    }

    async get(){
        try {
            const data = await fetch(this._url)
            const response = await data.json()
            return response
        } catch (error) {
            console.log(error)
        }
    }

}

export class FetchPhotograph extends FetchData {
    constructor(url){
        super(url)
    }

    async getAll(){
        const data = await this.get()
        return data.photographers
    }

    async getOne(id){
        const allPhotograpers = await this.getAll()
        const photographer = allPhotograpers.find(person => person.id === id)
        return photographer
    }
}

/* const data = new FetchPhotograph('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
data.fetchOne(195).then(d => console.log(d)) */
