const Contenedor = require('./contenedor')

async function main() {
    const product = new Contenedor('./productos.json')

    console.log('Muestro todos los productos')
    let allProd = await product.getAll()
    console.log(allProd)

    const idToSerch = 1
    console.log(`Muestro el producto con id: ${idToSerch}`)
    let productById = await product.getById(idToSerch)
    console.log(productById)

    // console.log('Se eliminaron todos los productos')
    // let allDelete = await product.deleteAll()
    // console.log(allDelete)

    // const l = 1
    // console.log(`Elimino el producto con id: ${l}`)
    // let deleteById = await product.deleteById(l)
    // console.log(deleteById)
}

main()