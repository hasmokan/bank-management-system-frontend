/*
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-16 07:58:23
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-16 13:55:36
 * @FilePath: \frontend\src\inferface\loginResponse.ts
 * @Description: 响应response的解析接口
 */

//登陆
/**
 * Represents the data structure for login account information.
 * @interface loginAccountInfoData
 * @property {string} accountNumber - The account number associated with the account.
 * @property {string} phoneNumber - The phone number associated with the account.
 * @property {string} idNumber - The identification number associated with the account.
 * @property {string} permission - The permission level of the account.
 */
interface AccountInfoDTO {
    accountNumber: string
    phoneNumber: string
    idNumber: string
    permission: string
}
/**
 * Represents the response object returned from the loginAccountInfo API endpoint.
 * @interface loginAccountInfoResponse
 * @property {string} message - The message returned from the API.
 * @property {number} code - The status code returned from the API.
 * @property {loginAccountInfoData} accountInfoDTO - The account information data object.
 */
export interface loginAccountInfoResponse {
    message: string
    code: number
    accountInfoDTO: AccountInfoDTO
}
/***********************************************************************************************/

//注册
/**
 * Represents the data required to register an account information.
 * @interface registerAccountInfoData
 * @property {string} accountNumber - The account number of the user.
 * @property {string} phoneNumber - The phone number of the user.
 * @property {string} idNumber - The identification number of the user.
 * @property {string} permission - The permission level of the user.
 */
/**
 * Represents the response object returned when registering an account.
 * @interface registerAccountInfoResponse
 * @property {string} message - The message returned by the server.
 * @property {number} code - The status code of the response.
 * @property {loginAccountInfoData} accountInfoDTO - The account information data object.
 */
interface registerAccountInfoData {
    accountNumber: string
    phoneNumber: string
    idNumber: string
    permission: string
}

export interface registerAccountInfoResponse {
    message: string
    code: number
    accountInfoDTO: registerAccountInfoData
}

/***********************************************************************************************/

//登出
/**
 * Represents the response object returned when logging out of an account.
 * @interface logoutAccountInfoResponse
 * @property {string} message - The message returned from the logout operation.
 * @property {number} code - The status code of the logout operation.
 */
export interface logoutAccountInfoResponse {
    message: string
    code: number
}

/***********************************************************************************************/

//开卡

/**
 * Represents the data for opening a card info.
 * @interface openCardInfoData
 * @property {string} cardNumber - The card number.
 * @property {string} phoneNumber - The phone number.
 * @property {string} idNumber - The ID number.
 */

interface openCardInfoData {
    cardNumber: string
    phoneNumber: string
    idNumber: string
}
/**
 * Represents the response object returned when retrieving open card information.
 * @interface openCardInfoResopnse
 * @property {string} message - The message returned in the response.
 * @property {number} code - The code returned in the response.
 * @property {openCardInfoData} cardInfoDTO - The data object containing open card information.
 */
export interface openCardInfoResponse {
    message: string
    code: number
    cardInfoDTO: openCardInfoData
}

/***********************************************************************************************/

//销卡

/**
 * Represents the response object returned when closing a card info.
 * @interface closeCardInfoResponse
 * @property {string} message - The message returned by the API.
 * @property {number} code - The status code returned by the API.
 */
export interface closeCardInfoResponse {
    message: string
    code: number
}

/***********************************************************************************************/

//查询卡信息

/**
 * Represents the response object returned from a query card request.
 * @interface queryCardResponse
 * @property {string} message - The message returned from the query card request.
 * @property {number} code - The status code of the query card request.
 */
export interface queryCardResponse {
    message: string
    code: number
}

/***********************************************************************************************/

//验证卡
/**
 * Represents the data required to verify card information.
 * @interface verifyCardInfoData
 * @property {string} cardNumber - The card number to be verified.
 * @property {string} phoneNumber - The phone number associated with the card.
 * @property {string} idNumber - The identification number associated with the card.
 */
interface verifyCardInfoData {
    cardNumber: string
    phoneNumber: string
    idNumber: string
}

/**
 * Represents the response object returned from the verifyCard API endpoint.
 * @interface verifyCardResponse
 * @property {string} message - The message returned from the API.
 * @property {number} code - The status code returned from the API.
 * @property {verifyCardInfoData} cardInfoDTO - The data object containing information about the verified card.
 */
export interface verifyCardResponse {
    message: string
    code: number
    cardInfoDTO: verifyCardInfoData
}

/***********************************************************************************************/
//查询卡

export interface cardListItem {
    cardNumber: string
    phoneNumber: string
    idNumber: string
}

export interface queryCardListResponse {
    message: string
    code: number
    List: cardListItem[]
}
