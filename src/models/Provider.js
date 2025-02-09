const colletionName = "provider";
function getProviderModel() {
    return {
        name: "",
        contact: {
            name: "",
            numberPhone: "",
            email: ""
        },
        address: "",
        calification: 0.0
    };
}
module.exports = {
    colletionName,
    getProviderModel
}