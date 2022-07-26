class tblProduct
{
    constructor(ProductId, ProductName,ProductCode, ProductImage, ProductDescription, ProductUnitPrice, TotalQty)
    {
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.ProductCode = ProductCode;
        this.ProductImage = ProductImage;
        this.ProductDescription = ProductDescription;
        this.ProductUnitPrice = ProductUnitPrice;
        this.TotalQty = TotalQty;
    }
}

module.exports = tblProduct;