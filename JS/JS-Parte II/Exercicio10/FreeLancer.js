let point = 0
let listJobOffer = []
let jobsList = ""
let candidate = []
let names = ""


function menuLoad(){
    do{
    point = parseFloat(prompt(
        "Bem-Vindo a FreeLancer - Vagas disponíveis: "+ listJobOffer.length + " \n\n"+
        "Escolha uma opção: \n"+
        "1. Ofertas de empregos\n"+
        "2. Cadastre uma vaga de emprego\n"+
        "3. Ver uma vaga de emprego \n"+
        "4. Aplicar para uma vaga de emprego\n"+
        "5. Excluir uma vaga de emprego\n"+
        "6. Sair"))
    
        switch(point){

            case 1:
                showListJobOffer()
                break
            
            case 2:
                addlistJobOffer()
                break

            case 3:
                showJobOfferByIndex(parseFloat(prompt("Insira o índice da vaga de trabarlho")))
                break

            case 4:
                registerCandidate()
                break

            case 5:
                excludeJobOffer()
                break

            case 6:
                window.close()
                break

        }

    } while(point !== 6)
}
// //---> Create a job

function createJob(index , name, description, limitDate, candidate, totalCandidate){
    let job = {index, name , description, limitDate, candidate, totalCandidate}
    return job
}

// //---> Creating a candidate for a job

function createCandidate(name, jobIndex){
    let applicant = {name , jobIndex}
    return applicant
}

// ---> Job index searching 

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
    let name = prompt("Nome do emprego:")
    let description = prompt("Descrição do emprego")
    let limitDate = Date(prompt("Data limite para aplicar a vaga de emprego:"))
    let index = indexOfTheJob()
    listJobOffer.push(createJob(index, name, description, limitDate , candidate , candidate.length))
}

// //Show all the jobs

function showListJobOffer(){
    if(listJobOffer.length === 0){
        alert("A lista de vagas está vazia!")
    }else{
        listJobOffer.map(function(job){
            jobsList += "Emprego: "+ job.index + "\n\n" + 
                        "Nome: " + job.name + "\n" + 
                        "Descrição: " + job.description + "\n" +
                        "Data:" + job.limitDate  + "\n" + 
                        "Candidatos: " + candidatesNames(job.index) + "\n\n"

        })
        window.alert(jobsList)
        jobsList = ""
    }
}

// Show a job by its index

function showJobOfferByIndex(index){
    if (listJobOffer.length === 0) {
        alert("A lista de vagas de emprego está vazia")
    }
    listJobOffer.filter(function(job){
        if(job.index === index){
            jobsList =  "Emprego: "+ job.index + "\n\n" +
                        "Nome: " + job.name + "\n" +
                        "Descrição: " + job.description + "\n" +
                        "Data:" + job.limitDate + "\n" + 
                        "Candidatos: " + candidatesNames(job.index) + "\n\n"
            alert(jobsList)
        }else{
            alert("Não existe vaga com índice igual a: " +  index)
        }})
    jobsList = ""
}

//A candidate aplly for the job

function registerCandidate(){
    let name = prompt("Qual o nome do candidato?")
    let jobIndex = parseFloat(prompt("Em qual vaga deseja se candidatar?"))
    candidate.push(createCandidate(name, jobIndex))

}

// Show names of candidates of a specific job

function candidatesNames(index){ // Filter all names of  candidates from a specific job index
    names = ""
    candidate.filter(function(applicant){
        if(applicant.jobIndex === index) {
            names += applicant.name + " " 
    }})
    return names
}


//Exclude a job

function excludeJobOffer(){ // -1 ---> INDEX === JobOffer Number
    let index = parseFloat(prompt("Indique o índice da vaga a ser excluída: "))
    showJobOfferByIndex(index)

    if (index <= listJobOffer.length && window.confirm("Deseja excluir a vaga?")) {
        listJobOffer.splice(index -1 , 1)
        candidate.filter(function(applicant){
            if(applicant.jobIndex === index){
                candidate.splice(index - 1 , 1)
            }
        })
        alert("Vaga Excluída com sucesso!")
    } 
}

/*------------Loading de System--------------------*/

menuLoad()

/*Visualize the arrays */

console.log(listJobOffer)
console.log(candidate)