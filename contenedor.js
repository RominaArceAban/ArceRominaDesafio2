const fs = require('fs')

class Contenedor {

    constructor(ruta) {
        this.ruta = ruta,
        this.data = []

        try {
            this.read()
        } catch (error) {
            console.log('No se encontro el archivo, creando uno nuevo')
            this.write()
        }
    }

    write() {
        fs.promises.writeFile
    }



    async save(obj) {
        
    }
    async getById(id) {
        const products = await this.getAll()
        const productById = products.find(p => p.id == id)
        return productById
    }
    async getAll() {
        try {
            const products = await fs.promises.readFile(this.ruta, 'utf-8')
            return JSON.parse(products)
        } catch(error) {
            return error
        }
    }
    async deleteById(id) {
        
    }
    async deleteAll() {
        
    }
}


module.exports = Contenedor