module.exports = {
    productsSP : {
        "getAllProducts":"CALL catalog_get_products_on_catalog",            //GET All Products on catalog
        "getSingleProduct":"CALL catalog_get_product_info",
        "getProductsByCategory":"CALL catalog_get_products_in_category",
        "getProductsByDepartment":"CALL catalog_get_products_on_department",
        "getProductDetails":"CALL catalog_get_product_details",
        "getProductLocations":"CALL catalog_get_product_locations",
        "getProductReviews":"CALL catalog_get_product_reviews",
        "postProductReview":"CALL catalog_create_product_review"
    }
}