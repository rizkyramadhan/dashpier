{"version":3,"file":"bundles/npm.frisbee.295e0dba057ffb37af14.min.js","sources":["webpack:////media/riz/data/Projects/dashpier/node_modules/frisbee/lib/interceptor.js"],"sourcesContent":["\"use strict\";\n\nmodule.exports = class Interceptor {\n  constructor(API, interceptableMethods = []) {\n    this.interceptors = [];\n    if (!API) throw new Error('API should be passed to the Interceptor');\n    if (interceptableMethods.length === 0) throw new Error('no methods were added to interceptableMethods');\n    interceptableMethods = interceptableMethods.map(method => method.toLowerCase());\n    if (interceptableMethods.includes('delete') && !interceptableMethods.includes('del')) interceptableMethods.push('del');\n    if (interceptableMethods.includes('del') && !interceptableMethods.includes('delete')) interceptableMethods.push('delete');\n    interceptableMethods.forEach(methodName => {\n      const methodFn = API[methodName.toLowerCase()];\n\n      API[methodName.toLowerCase()] = (...args) => this.interceptedMethod(methodFn(...args), ...args);\n    });\n  }\n  /* eslint-disable promise/prefer-await-to-then */\n\n\n  interceptedMethod(methodFn, ...args) {\n    const interceptors = this.interceptors;\n    const reversedInterceptors = interceptors.slice().reverse();\n    let promise = Promise.resolve(args); // Register request interceptors\n\n    interceptors.forEach(({\n      request,\n      requestError\n    }) => {\n      if (typeof request === 'function') promise = promise.then(args => request(...[].concat(args)));\n      if (typeof requestError === 'function') promise = promise.catch(requestError);\n    }); // Register methodFn call\n\n    if (typeof methodFn === 'function') promise = promise.then(args => methodFn(...[].concat(args))); // Register response interceptors\n\n    reversedInterceptors.forEach(({\n      response,\n      responseError\n    }) => {\n      if (typeof response === 'function') promise = promise.then(response);\n      if (typeof responseError === 'function') promise = promise.catch(responseError);\n    });\n    return promise;\n  }\n  /* eslint-enable promise/prefer-await-to-then */\n\n\n  register(interceptor) {\n    this.interceptors.push(interceptor);\n    return () => this.unregister(interceptor);\n  }\n\n  unregister(interceptor) {\n    const index = this.interceptors.indexOf(interceptor);\n    if (index >= 0) this.interceptors.splice(index, 1);\n  }\n\n  clear() {\n    this.interceptors = [];\n  }\n\n};"],"mappings":"AAEA","sourceRoot":""}