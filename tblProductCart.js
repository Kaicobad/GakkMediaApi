class tblProductCart
{
    constructor
    (
        CartId,
        PurchaseCode,
        ProductId,
        Quantity,
        TotalPrice,
        )
    {

        this.CartId = CartId;
        this.PurchaseCode = PurchaseCode;
        this.ProductId = ProductId;
        this.Quantity = Quantity;
        this.TotalPrice = TotalPrice;
    }
}

module.exports = tblProductCart;