const colletionName = "transactionLog";
function getTransactionLogModel() {
    return {
        input: Boolean,
        products: {
            name: "",
            stock: 0,
            unitPrice: 0.0
        },
        source: "",
        destiny: "",
        date: new Date() //Date() devuelve la fecha actual.
    };
}
module.exports = {
    colletionName,
    getTransactionLogModel
}