module.exports = {
    categorySP : {
        "getAllCategories":"CALL catalog_get_categories",                      //GET All Category
        "getSingleCategory":"CALL catalog_get_category_details",                //GET Category by ID
        "getProductCategory":"CALL catalog_get_categories_for_product",          //GET Product Category
        "getDepartmentCategories":"CALL catalog_get_categories_list"          //GET CAtegories list by dept ID
    }
}