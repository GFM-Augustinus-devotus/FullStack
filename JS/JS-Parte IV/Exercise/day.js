import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(customParseFormat);

const rl = readline.createInterface({ input, output });
const today = dayjs();

function mainDate(data, today) {
    const nestBirthday = data.add(today.diff(data, 'year'), 'year');
    const age = today.diff(data, 'year');
    let birthday;

    if (today.diff(nestBirthday, 'day') < 0) {
        birthday = nestBirthday;
    } else if (today.diff(nestBirthday, 'day') > 0) {
        birthday = nestBirthday.add(1, 'year');
    } else {
        birthday = today;
    }

    const daysForNexBirthday = birthday.diff(today, 'day');

    console.log(`A idade é: ${age}`);
    console.log(`Seu próximo aniversário é: ${birthday.format('DD/MM/YYYY')}`);
    console.log(`Faltam ${daysForNexBirthday} dia(s) para o próximo aniversário`);
}

let data;

while (true) {
    const answer = await rl.question('Qual a sua data de nascimento (DD/MM/YYYY)? ');
    data = dayjs(answer, 'DD/MM/YYYY', true);

    if (data.isValid()) {
        break;
    }

    console.log('Data inválida. Por favor, digite a data no formato DD/MM/YYYY.');
}

mainDate(data, today);
rl.close();

