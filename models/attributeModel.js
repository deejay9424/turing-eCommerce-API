module.exports = {
    attributeSP : {
        "getAllAttributes":"CALL catalog_get_attributes",                      //GET All attributes
        "getSingleAttribute":"CALL catalog_get_attribute_details",                //GET attribute by ID
        "getValuesAttribute":"CALL catalog_get_attribute_values",          //GET Attribute values
        "getAttributesWithProductID":"CALL catalog_get_product_attributes"    //GET Attributes by product ID
    }
}