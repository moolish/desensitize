import {isFit} from './utils'
/**
 * 【固定电话】区号不隐藏 显示后四位，其他隐藏，比如：010 ****3241/ 010-****3241
 * @param {String} mobile
 */
function mobile (mobile) {
  if (!isFit(mobile)) return ''

  if (typeof mobile === 'number') {
    mobile = String(mobile)
  }
  
  mobile = mobile.slice(0, 1) + mobile.slice(1, -2).replace(/\S/g, '*') + mobile.slice(-2)

  return mobile
}
export default mobile;