let point = 0
let listJobOffer = []
let candidate = []


function menuLoad(){
    do{
    point = parseFloat(prompt(
        "Menu FreeLancer \n\n"+
        "Choose an option: \n"+
        "1. Job Offers\n"+
        "2. Create a job\n"+
        "3. See a job \n"+
        "4. Apply for a job\n"+
        "5. Exclude a job\n"+
        "6. Exit"))
    
        switch(point){

            case 1:
                showListJobOffer()
                break
            
            case 2:
                addlistJobOffer()
                break

            case 3:

                break

            case 4:

                break

            case 5:

                break

            case 6:
                window.close()
                break

        }

    } while(point !== 6)
}

//objetivo é criar uma matriz semelhante a essa mas para ofertas de emprego

// const personagens = [
//     { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
//     { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
//     { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
//     { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
//     { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
//     { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
//     { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
//   ]


// //---> Create a job

function createJob(index , name, description, limitDate, candidate, totalCandidate){
    let job = {index, name , description, limitDate, candidate, totalCandidate}
    return job
}

function indexOfTheJob(){
    let index = 1
    listJobOffer.forEach(element => {
        if (element){
            index++
        }
    });
    return index
}


function addlistJobOffer(){
    let name = prompt("Name of the job:")
    let description = prompt("Description of the job:")
    let limitDate = new Date(prompt("Limit date to apply to the job:")).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    let index = indexOfTheJob()
    listJobOffer.push(createJob(name, description, limitDate , index , candidate , candidate.length))
}

// //Show the jobs

function showListJobOffer(){
    listJobOffer.map(function(job){
        window.alert( "Emprego: "+ job.index + "\n\n"+"Nome: " + job.name + "\n" + "Descrição: " + job.description + "\n" + "Data Limite:" + job.limitDate)
    })
}

//A candidate aplly for the job

function registerCandidate(){
    candidate.push(prompt("Insira o nome do candidato"))
}




/*------------Loading de System--------------------*/

menuLoad()