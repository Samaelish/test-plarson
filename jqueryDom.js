// Такая будет работать только для DOMContentLoaded, асинхронно через setTimeout
function $(callback) {
  if (typeof callback !== 'function') return

  if (document.readyState !== 'loading') {
    // Если DOM уже готов, выполняем асинхронно
    setTimeout(callback, 0)
  } else {
    // Иначе ждём события DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callback)
  }
}
