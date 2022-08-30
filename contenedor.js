const fs = require('fs')

class Contenedor {

    constructor(filename) {
        this.filename = filename,
        this.products = []

        try {
            this.read()
        } catch (error) {
            console.log('No se encontro el archivo, creando uno nuevo')
            this.write()
        }
    }

    read() {
        return fs.promises.readFile(this.filename, 'utf-8')
            .then(data => JSON.parse(data))
    }

    write() {
        return fs.promises.writeFile(this.filename, JSON.stringify(this.products))
    }



    async save(obj) {
        
    }
    async getById(id) {
        try {
            const products = await this.getAll()
            const productById = products.find(p => p.id == id)
            return productById
        } catch(error) {
            console.log(error)
        }
        
    }
    async getAll() {
        try {
            const data = await this.read();
            return data
        } catch(error) {
            console.log(error)
        }
    }
    async deleteById(id) {
        const idx = this.products.findIndex(p => p.id == id)
        this.products.splice(idx, 1)
        try {
            await this.write()
        } catch(error) {
            console.log(error)
        }
    }
    async deleteAll() {
        this.products = []
        try {
            await this.write()
        } catch(error) {
            console.log(error)
        }
    }
}


module.exports = Contenedor