const btn = document.querySelector('.header__btn')
const menu = document.querySelector('.nav')

const inputRange = document.querySelector('#range')
const inputRangeValue = document.querySelector('#percent')

const select = document.querySelector('.form__select-selected')
const selectText = document.querySelector('.form__select-selected span')
const selectWrapper = document.querySelector('.form__select')
const options = document.querySelector('.form__select-list')
const option = document.querySelectorAll('.form__select-item')
const inputSelect = document.querySelector('.input__select')

const showMenu = () => {
  btn.classList.toggle('active')
  menu.classList.toggle('active__menu')
}

const showInputValue = (e) => {
  inputRangeValue.innerText = `${e.target.value}%` 
}

const showOptions = () => {
  select.classList.toggle('active-select')
  selectWrapper.classList.toggle('active-select')
  options.classList.toggle('active-list')
}

const closeSelect = (e) => {
  let inputValue

  select.classList.remove('active-select')
  selectWrapper.classList.remove('active-select')
  options.classList.remove('active-list')

  inputValue = e.target.innerText
  selectText.innerText = inputValue
}

btn.addEventListener('click', showMenu)
inputRange.addEventListener('input', showInputValue)
select.addEventListener('click', showOptions)
option.forEach(o => {
  o.addEventListener('click', closeSelect)
})