module.exports = {
    customersSP: {
        "getCustomerByID": "CALL customer_get_customer",
        "registerCustomer":"CALL customer_add",
        "getLoginDetails":"CALL customer_get_login_info",
        "updateCustomer":"CALL customer_update_account",
        "updateAddress":"CALL customer_update_address",
        "updateCreditCard":"CALL customer_update_credit_card"
    }
}