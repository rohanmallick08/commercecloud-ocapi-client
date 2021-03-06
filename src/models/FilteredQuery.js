/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
// import ApiClient from '../ApiClient'
import Filter from './Filter'
import Query from './Query'

/**
* The FilteredQuery model module.
* @module models/FilteredQuery
* @version 17.8
*/
export default class FilteredQuery {
    /**
    * Constructs a new <code>FilteredQuery</code>.
    * A filtered query allows to filter the result of a (possibly complex) query using a (possibly complex) filter.
    * @alias module:models/FilteredQuery
    * @class
    * @param filter {module:models/Filter} The (possibly complex) filter object.
    * @param query {module:models/Query} The query object.
    */

    constructor(filter, query) {
        /**
        * The (possibly complex) filter object.
        * @member {module:models/Filter} filter
        */
        this.filter = filter

        /**
        * The query object.
        * @member {module:models/Query} query
        */
        this.query = query
    }

    /**
    * Constructs a <code>FilteredQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/FilteredQuery} obj Optional instance to populate.
    * @return {module:models/FilteredQuery} The populated <code>FilteredQuery</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilteredQuery()

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = Filter.constructFromObject(data['filter'])
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = Query.constructFromObject(data['query'])
            }
        }
        return obj
    }
}
