module.exports = {
    ordersSP : {
        "postOrder":"CALL shopping_cart_create_order",
        "getSingleOrder":"CALL orders_get_order_details",
        "getCustomerOrder":"CALL orders_get_by_customer_id",
        "getOrderDetails":"CALL orders_get_order_info"
    }
}