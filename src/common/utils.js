// export function debounce (func, delay) {
//   let timer = null
//   return function () {
//     const context = this
//     const args = arguments
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       func.apply(context, args)
//     }, delay)
//   }
// }

let timer
export function debounce (func, delay) {
  return function () {
    const context = this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(context, args)
      // func()
    }, delay)
  }
}

// export function debounce (func, delay) {
//   let timer = null
//   return function () {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(func, delay)
//   }
// }
