// Работает для DOMContentLoaded и после, через load событие у window. Для защиты от повторений добавлен "isReady".
// Колбеки идут очередью, синхронно.
;(function () {
  const callbacks = []
  let isReady = false

  // Обработчик готовности DOM
  function domReadyHandler() {
    if (isReady) return
    isReady = true

    // Выполнить все колбэки
    callbacks.forEach(callback => callback())
    callbacks.length = 0
  }

  // Проверка состояния документа
  if (document.readyState !== 'loading') {
    // Если DOM уже готов, выполнить сразу
    domReadyHandler()
  } else {
    // Иначе подписаться на события
    document.addEventListener('DOMContentLoaded', domReadyHandler)
    window.addEventListener('load', domReadyHandler) // На случай долгой загрузки
  }

  // Публичный метод для добавления колбэков
  window.domReady = function (callback) {
    if (isReady) {
      callback() // Если уже готово, вызвать сразу
    } else {
      callbacks.push(callback) // Иначе добавить в очередь
    }
  }
})()
