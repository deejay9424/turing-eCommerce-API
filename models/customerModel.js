module.exports = {
    customersSP: {
        "getCustomerByID": "CALL customer_get_customer",
        "registerCustomer":"CALL customer_add",
        "getLoginDetails":"CALL customer_get_login_info"
    }
}