function createCountryCard(country){
    const card = document.createElement('div')
    const name = document.createElement('h2')
    const flag = document.createElement('img')
    const population = document.createElement('p')
    
    card.classList.add('country')
    name.textContent = country.altSpellings[1]
    flag.src = country.flags.svg
    flag.alt = country.altSpellings[1]
    population.textContent = country.population

    card.append(name, flag, population)
    document.querySelector('#countries').append(card)

}


async function getCountries(){ 
    
    const response = await fetch("https://restcountries.com/v3.1/name/brazil") 
    const country = await response.json()
    console.log(country)
    return country

}

// Chamada das funções para mostrar os dados da Requisição da API

getCountries().then(countries => countries.forEach(createCountryCard))