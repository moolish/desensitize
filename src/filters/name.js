import {isFit} from './utils'
/**
 * 【固定电话】区号不隐藏 显示后四位，其他隐藏，比如：010 ****3241/ 010-****3241
 * @param {String} name
 */
function name (name) {
  if (!isFit(name)) return ''

  if (typeof name === 'number') {
    name = String(name)
  }
  mobile = mobile.slice(0, 1) + mobile.slice(1, -2).replace(/\S/g, '*') + mobile.slice(-2)

  name = regionCode + code.slice(0, -4).replace(/\S/g, '*') + code.slice(-4)

  return name
}
export default name;