let phrases = [
  { text: 'Первым государством, которое приняло христианство официальной религией страны, стала Армения.'},
  { text: 'Жители Африки, которые исповедуют христианство, считают, что Иисус был негром.'},
  { text: 'Считается, что у Иисуса были карие глаза, как и у подавляющего большинства евреев.'},
  { text: 'В Библии нет упоминаний о дате рождения Христа.'},
  { text: 'Раньше причастие с вином в католицизме было привилегией духовной элиты.'},
  { text: 'Полагается, что у Христа были братья и сестры.'},
  { text: 'Первый русский математик Кирик был монахом.'},
  { text: 'В Антарктиде есть храм христиан.'},
  { text: 'Нельзя молится перед поврежденной иконой.'},
  { text: 'В дореволюционной России сведения о рождении и смерти находились исключительно в церкви.'}
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
