/*Para exemplificar vou utilizar a data da final da copa do mundo de 2002 (30/06/2002)

Devo colocar tudo dento de uma função onde eu passo apenas a data 'yyyy-mm-dd'. Atenção na conversão de Data para string

.Descobrir a idade atual
.Quando será o próximo aniversário
.Quantos dias faltam para o próximo aniversário

*/
const dayjs = require('dayjs')
const data = dayjs('2002-06-30')
const today = dayjs()

function mainDate(data, today){

    var nestBirthday = data.add( today.diff(data, 'year') ,'year')
    var age = today.diff(data, 'year')
    var birthday = ''
    var daysForNexBirthday = 0

    if (today.diff(nestBirthday, 'day') < 0 ) {
        birthday = nestBirthday
    }else if(today.diff(nestBirthday, 'day') > 0 ) {
        birthday = nestBirthday.add(1 , 'year')
    }else{
        birthday = today
    }

    daysForNexBirthday = birthday.diff(today, 'day')

    console.log(`A idade é: ${age}`)
    console.log(`Seu proximo aniversário é: ${birthday.format('DD/MM/YYYY')}`)
    console.log(`Faltam ${daysForNexBirthday} dia(s) para o próximo aniversário`)
}



mainDate(data, today)


