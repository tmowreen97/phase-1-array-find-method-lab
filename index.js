// code your solution here
function isYear(array){
    if (array.result === "W"){
        return true
    }
    else{
        return false
    }
}
function superbowlWin(array){
    let winner = array.find(isYear);
    if (winner){
        return winner.year
    }
    else {
        return undefined
    }
}