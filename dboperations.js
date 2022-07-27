var config = require('./dbconfig');
const sql = require('mssql');



async function getProducts()
{
    try 
    {
        let pool = await sql.connect(config);
        let products =await pool.request().query("select * from tblProduct");
        return products.recordsets;
    } 
    catch (error) 
    {
        console.log(error);
    }
}

async function getProductById(ProductId)
 {
     try 
     {
         let pool = await sql.connect(config);
         let products =await pool.request()
         .input('parameter_productId', sql.Int, ProductId)
         .query("select * from tblProduct where productId = @parameter_productId");
         return products.recordsets;
     } 
     catch (error) 
     {
         console.log(error);
     }
 }

 async function addProduct(Product)
 {
     try 
     {
         let pool = await sql.connect(config);
         let products =await pool.request()
         .input('ProductName', sql.VarChar, Product.ProductName)
         .input('ProductCode', sql.VarChar, Product.ProductCode)
         .input('ProductImage', sql.VarChar, Product.ProductImage)
         .input('ProductDescription', sql.VarChar, Product.ProductDescription)
         .input('ProductUnitPrice', sql.Float, Product.ProductUnitPrice)
         .input('TotalQty', sql.Int, Product.TotalQty)
         .query('INSERT INTO tblProduct (ProductName, ProductCode, ProductImage,ProductDescription,ProductUnitPrice,TotalQty) VALUES (@ProductName, @ProductCode, @ProductImage, @ProductDescription, @ProductUnitPrice, @TotalQty)');
         return products.recordsets;
     } 
     catch (error) 
     {
         console.log(error);
     }
 }

 async function deleteProduct(ProductId)
 {
     try 
     {
         let pool = await sql.connect(config);
         let products =await pool.request()
         .input('productId', sql.Int, ProductId)
         .query("delete from tblProduct where ProductId = @productId");
         return products.recordset;
     } 
     catch (error) 
     {
         console.log(error);
     }
 }

module.exports = 
{
    getProducts : getProducts,
    getProductById : getProductById,
    addProduct : addProduct,
    deleteProduct : deleteProduct
}