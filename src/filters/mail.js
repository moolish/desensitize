import {isFit} from './utils'
/**
 * 【电子邮箱】@前显示两位明文+***，@后全部显示
 * @param {String} email
 */
function mail (email) {
  if (!isFit(email)) return ''

  if (typeof email === 'number') {
    email = String(email)
  }
  const atIndex = email.indexOf('@')

  if (atIndex === -1) return email

  return email.slice(0, 2) +
    email.slice(2, atIndex).replace(/\S/g, '*') +
    email.slice(atIndex)
}

export default email