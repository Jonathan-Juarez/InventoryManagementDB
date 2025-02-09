const colletionName = "staff";
function getStaffModel() {
    return {
        name: "",
        rol: "",
        contact: {
            numberPhone: "",
            email: ""
        },
        address: ""
    };
}
module.exports = {
    colletionName,
    getStaffModel
}