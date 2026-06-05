

const multiplicacao =  (...fatores) => {
    console.log(fatores.reduce((acum , fator) => acum * fator , 1))
}

export default multiplicacao