const lodash =  require("lodash")

const worldChampions = ["Federation of Brazil", "Argentina", "Uruguay", "Spain", "England", "France", "Germany", "Italy"]

console.log(lodash.isArray(worldChampions))

worldChampions.forEach((team) => {
    console.log(lodash.kebabCase(team))
})