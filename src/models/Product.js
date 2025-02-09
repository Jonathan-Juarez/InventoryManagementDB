const colletionName = "product";
function getProductModel() {
    return {
        name: "",
        category: "",
        description: "",
        brand: "",
        stock: 0,
        price: 0.0,
        store: ""
    }
}
module.exports = {
    colletionName,
    getProductModel
}