// CASE 1 :  ONLY ONE ARGUMENT PASSED ON THE FUNCTION getTea(noOfCups)

var prepareTea = () =>{
    return "Green tea Prepared"
}

const getTea = (noOfCups) =>{
    const TeaCups = []
    for(let i =1; i<=noOfCups;i+=1){
        const teaCup = prepareTea()
        TeaCups.push(teaCup)
    }
    return TeaCups
}


const NewObj = getTea(2)
console.log(NewObj)

// CASE 2 : PASSING THE 2 ARGUMENTS IN FUNTION getTea(typeOfTeam , noOfCups)


var preparegreenTea = () =>{
    return "greenTeaPrepared"
}

var prepareBlackTea = () =>{
    return "BlackTeaPrepared"
}

var getTeaNew = (typeOfTea , noOfCupsNew)=>{
    const arr = []

    for(let i =1; i<=noOfCupsNew;i++){
        const TypeTea = typeOfTea()
        arr.push(TypeTea)
    }
    console.log(arr)
}

const newTEa = getTeaNew(preparegreenTea,20)