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
import ApiClient from '../ApiClient'

/**
* The SuggestedPhrase model module.
* @module models/SuggestedPhrase
* @version 17.8
*/
export default class SuggestedPhrase {
    /**
    * Constructs a new <code>SuggestedPhrase</code>.
    * Document representing a suggested search phrase.
    * @alias module:models/SuggestedPhrase
    * @class
    */
    constructor() {
        /**
        * Returns whether this suggested phrase exactly matches the user input search phrase.
        * @member {Boolean} exact_match
        */
        this.exact_match = undefined

        /**
        * Returns the suggested search phrase.
        * @member {String} phrase
        */
        this.phrase = undefined
    }

    /**
    * Constructs a <code>SuggestedPhrase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SuggestedPhrase} obj Optional instance to populate.
    * @return {module:models/SuggestedPhrase} The populated <code>SuggestedPhrase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuggestedPhrase()

            if (data.hasOwnProperty('exact_match')) {
                obj['exact_match'] = ApiClient.convertToType(data['exact_match'], 'Boolean')
            }
            if (data.hasOwnProperty('phrase')) {
                obj['phrase'] = ApiClient.convertToType(data['phrase'], 'String')
            }
        }

        return obj
    }
}
