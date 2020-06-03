export const selectAll = {
  inserted(el) {
    let input = el.querySelector('.q-field__native');
    input.select()
    input.addEventListener('focus', () => {
      if (input.value.length > 0) {
        input.select()
      }
    })
  }
}