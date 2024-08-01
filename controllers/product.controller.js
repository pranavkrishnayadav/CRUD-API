const  Product = require( "../models/product.model");

const getproducts = async(req,res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const getproduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(500).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}


const createproduct = async(req,res)=>{
    try{ 
        const product = await Product.create(req.body);
        res.status(200).json(product)
    }catch(error){
        console.status(500).json({message:error.message})
    }
}


const updateProduct  = async(req,res)=>{

    try{
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
    
        if(!product){
            return res.status(404).json({message:"product not Found"})
        } 
        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)

    }  catch(error){
        res.status(500).json({message:error.message})
    }
}


const deleteproduct = async(req,res)=>{
    try{
        const {id} = req.params;

       const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message:"Product Not Found"});
        }
        res.status(200).json({message:"Product Deleted Successfully"}); 
   } catch(Error){
    res.status(500).json({message:error.message})
   }
}


module.exports = {
    getproducts
    ,getproduct, createproduct,updateProduct,deleteproduct
}