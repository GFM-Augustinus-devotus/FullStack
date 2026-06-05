export {soma}

export function exportPadrao(){
    console.log("Export inline padrão")
}

export default function exportDefaultPadrao(){
    console.log("Export default inline. ATENÇÃO: pode ter apenas um export default por arquivo")
}

const soma = (a,b) => console.log(`${a} + ${b} = ${a+b}`)


