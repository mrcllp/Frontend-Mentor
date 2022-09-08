const mainContainer = document.querySelector(".main-container")
const thanks = document.querySelector(".thanks")
const submitBtn = document.getElementById("submit")
const rateBtn = document.getElementById("rate-btn")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () =>  {
    thanks.classList.remove("hidden")
    mainContainer.style.display = "none"
   
})

rateBtn.addEventListener("click", () => {
    mainContainer.style.display = "block"
    thanks.classList.add("hidden")
  })

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
    })
})



