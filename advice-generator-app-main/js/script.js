const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector('.advice-generator__advice-number')
const adviceQuote = document.querySelector('.advice-generator__quote')
const getBtn = document.querySelector('button.advice-generator__btn')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json()
    return advice
};

const renderAdvice = (adviceObject) => {
    const {id, advice} = adviceObject;
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    adviceQuote.textContent = advice;
}

const generateNewAdvice = () => {
    const data = fetchNewAdvice()
    const advice = data.slip;
 
};


window.addEventListener('DOMContentLoaded', () => {
    getBtn.addEventListener('click', generateNewAdvice)
})