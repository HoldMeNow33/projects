let hScore1 = document.getElementById("h-score-1")
let hScore2 = document.getElementById("h-score-2")
let hScore3 = document.getElementById("h-score-3")
let gScore1 = document.getElementById("g-score-1")
let gScore2 = document.getElementById("g-score-2")
let gScore3 = document.getElementById("g-score-3")

let hScoreEl = document.getElementById("h-score")
let gScoreEl = document.getElementById("g-score")

let hScore = 0
let gScore = 0

function increaseHScore1() {
    hScore += 1
    hScoreEl.textContent = hScore
}


function increaseHScore2() {
    hScore += 2
    hScoreEl.textContent = hScore
}


function increaseHScore3() {
    hScore += 3
    hScoreEl.textContent = hScore
}


function increaseGScore1() {
    gScore += 1
    gScoreEl.textContent = gScore
}


function increaseGScore2() {
    gScore += 2
    gScoreEl.textContent = gScore
}


function increaseGScore3() {
    gScore += 3
    gScoreEl.textContent = gScore
}


















