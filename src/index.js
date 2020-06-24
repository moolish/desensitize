

import filters from './filters';

/**
 * 
 *
 * @param {Object} descriptor
 */
function desense(descriptor) {
  if(!descriptor) {
    throw new Error('please set config');
  }
  if (typeof descriptor !== 'object' || Array.isArray(descriptor)) {
    throw new Error('Rules must be an object');
  }
  let type = typeof descriptor.type === 'string' && ilters.hasOwnProperty(descriptor.type) ? descriptor.type : 'name'
  return filters[type](descriptor.value)
}

