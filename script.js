const h2 =document.querySelector('h2')
const div =document.querySelector('div')
const input =document.querySelector('input')
const btn =document.querySelector('button')

const handleFetch = ()=> {
    fetch(`http://api.weatherapi.com/v1/current.json?3baeb9c6aa9b420c908135532233107&q=${input.value}&days=7&aqi=no&alerts=no`)
        .then((response) =>response.json())
        .then((data)=>{
           const {temp_c, condition, humidity } = data.current
            const {name} = data.location
            div.innerHTML = `It is ${temp_c} C dagrees in ${name} and humidity is ${humidity}%`
            h2.innerHTML = condition.text
        })
}
btn.addEventListener('click', handleFetch)


//Home work cat
