const button = document.getElementById("button")

// button 要素と click イベント
const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

document.onkeydown = function (e) {
  console.log(e.key)
}

inputText.onkeydown = logValue
inputDate.onkeydown = logValue
