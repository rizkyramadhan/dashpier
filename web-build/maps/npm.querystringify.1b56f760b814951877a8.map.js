{"version":3,"file":"bundles/npm.querystringify.1b56f760b814951877a8.min.js","sources":["webpack:////media/riz/data/Projects/dashpier/node_modules/querystringify/index.js"],"sourcesContent":["'use strict';\n\nvar has = Object.prototype.hasOwnProperty\n  , undef;\n\n/**\n * Decode a URI encoded string.\n *\n * @param {String} input The URI encoded string.\n * @returns {String|Null} The decoded string.\n * @api private\n */\nfunction decode(input) {\n  try {\n    return decodeURIComponent(input.replace(/\\+/g, ' '));\n  } catch (e) {\n    return null;\n  }\n}\n\n/**\n * Attempts to encode a given input.\n *\n * @param {String} input The string that needs to be encoded.\n * @returns {String|Null} The encoded string.\n * @api private\n */\nfunction encode(input) {\n  try {\n    return encodeURIComponent(input);\n  } catch (e) {\n    return null;\n  }\n}\n\n/**\n * Simple query string parser.\n *\n * @param {String} query The query string that needs to be parsed.\n * @returns {Object}\n * @api public\n */\nfunction querystring(query) {\n  var parser = /([^=?&]+)=?([^&]*)/g\n    , result = {}\n    , part;\n\n  while (part = parser.exec(query)) {\n    var key = decode(part[1])\n      , value = decode(part[2]);\n\n    //\n    // Prevent overriding of existing properties. This ensures that build-in\n    // methods like `toString` or __proto__ are not overriden by malicious\n    // querystrings.\n    //\n    // In the case if failed decoding, we want to omit the key/value pairs\n    // from the result.\n    //\n    if (key === null || value === null || key in result) continue;\n    result[key] = value;\n  }\n\n  return result;\n}\n\n/**\n * Transform a query string to an object.\n *\n * @param {Object} obj Object that should be transformed.\n * @param {String} prefix Optional prefix.\n * @returns {String}\n * @api public\n */\nfunction querystringify(obj, prefix) {\n  prefix = prefix || '';\n\n  var pairs = []\n    , value\n    , key;\n\n  //\n  // Optionally prefix with a '?' if needed\n  //\n  if ('string' !== typeof prefix) prefix = '?';\n\n  for (key in obj) {\n    if (has.call(obj, key)) {\n      value = obj[key];\n\n      //\n      // Edge cases where we actually want to encode the value to an empty\n      // string instead of the stringified value.\n      //\n      if (!value && (value === null || value === undef || isNaN(value))) {\n        value = '';\n      }\n\n      key = encodeURIComponent(key);\n      value = encodeURIComponent(value);\n\n      //\n      // If we failed to encode the strings, we should bail out as we don't\n      // want to add invalid strings to the query.\n      //\n      if (key === null || value === null) continue;\n      pairs.push(key +'='+ value);\n    }\n  }\n\n  return pairs.length ? prefix + pairs.join('&') : '';\n}\n\n//\n// Expose the module.\n//\nexports.stringify = querystringify;\nexports.parse = querystring;\n"],"mappings":"AAEA","sourceRoot":""}