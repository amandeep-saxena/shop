const Product = require("../model/product");



const adddata = (req, res) => {
    try {
        console.log(req.body)

        const pro = Product.create(req.body);
        console.log(pro)
        res.send(pro)
    } catch (error) {
        return console.log(error)
    }
    // try {

    //     var data2 = req.body
    //     console.log(data2)

    //     const data = await product.create(data2);

    //     res.status(200).send( data )

    //     // res.status(200).json({ data, massage: " save product" })

    // } catch (error) {
    //     return console.log(error)
    // }

}


const findProduct = async (req, res) => {
    try {
        const blog = await Product.find();

        // if (!blog) {
        //     res.status(200).json({ message: "product not found" })
        // }
        res.send({ blog })
    } catch (error) {
        return console.log(error)
    }

}


const findbyId = async (req, res) => {
    try {
        const user = await Product.findById(req.params.id);
        res.status(200).json(user);

    } catch (error) {
        return console.log(error)
    }


}






module.exports = {
    adddata,
    findProduct,
    findbyId
}