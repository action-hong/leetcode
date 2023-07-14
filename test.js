function check(arr) {
  arr.forEach(([res, ans], index) => {
    if (equals(res, ans)) return
    console.log(`no ${index} error ! expect ${ans} but got ${res}`);
  })
}

function equals(a, b) {
  if (typeof a !== typeof b) return false
  if (isNaN(a) && isNaN(b)) return true
  if (typeof a !== 'object') return a === b
  if (a === null && b === null) return true
  if (Array.isArray(a) && Array.isArray(b)) {
    if(a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
      if (!equals(a[i], b[i])) return false 
    }
    return true
  }

  // object
  if (Object.keys(a).length !== Object.keys(b).length) return false
  for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
      if (!equals(a[key], b[key])) return false
    }
  }
  return true
}

module.export = {
  check
}