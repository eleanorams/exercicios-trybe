const captSubmitBtn = document.getElementById('submit')

const prevent = (event) => {
event.preventDefault()
}
captSubmitBtn.addEventListener('click', prevent)