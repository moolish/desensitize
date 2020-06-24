import {isFit} from './utils'
/**
 * 【证件号码】显示前 1 位＋ *（实际位数）＋后 1 位，如：5****************9
 * @param {String} id
 */
function idCard (id) {
  if (!isFit(id)) return ''

  if (typeof id === 'number') {
    id = String(id)
  }
  
  id = id.slice(0, 1) + id.slice(1, -1).replace(/\S/g, '*') + id.slice(-1)

  return id
}
export default idCard
