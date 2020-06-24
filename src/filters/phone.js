import {isFit} from './utils'
/**
 * 【固定电话】区号不隐藏 显示后四位，其他隐藏，比如：010 ****3241/ 010-****3241
 * @param {String} phone
 */
function phone (phone) {
  if (!isFit(phone)) return ''

  if (typeof phone === 'number') {
    phone = String(phone)
  }
  let regionCode = '' 
  let code = ''
  if(phone.includes(' ')) {
    let arr = phone.split(' ')
    regionCode = arr[0]
    code = arr[1]
  } else if(phone.includes('-')) {
    let arr = phone.split('-')
    regionCode = arr[0]
    code = arr[1]
  } else {
    code = phone
  }

  phone = regionCode + code.slice(0, -4).replace(/\S/g, '*') + code.slice(-4)

  return phone
}
export default phone;