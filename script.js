const url = 'https://api.adviceslip.com/advice'
const advice = document.getElementById('advice')
const button = document.getElementById('generateAdvice')
const adviceId = document.getElementById('adviceId')

const getAdvice = () => {fetch(url)
    .then(response => response.json()
    )
    .then(data => {
        advice.innerHTML = `"${data.slip.advice}"`
        adviceId.innerHTML = `Advice ID # ${data.slip.id}`
    })
    .catch(err => console.log(err))
}

window.addEventListener('load', getAdvice)

button.addEventListener('click', getAdvice)



