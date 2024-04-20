const btnPlay = document.getElementById("btnPlay")
const btnMale = document.getElementById("btnMale")
const btnFemale = document.getElementById("btnFemale")

let male_words = [
    "barbecue",
    "sac",
    "coffre-fort",
    "chauffage",
    "calme",
    "lit",
    "tee-shirt",
    "panier",
    "mot de passe",
    "doute",
    "âge",
    "entretien",
    "dos",
    "bonheur",
    "front",
    "fruit",
    "bijou"
]

let female_words = [
    "analyse",
    "annonce",
    "armoire",
    "attaque",
    "augmentation",
    "forêt",
    "chaussette",
    "chaleur",
    "affiche",
    "comète",
    "jalousie",
    "voiture",
    "fusée",
    "couleur",
    "dent",
    "douleur",
    "équipe",
    "asperge",
    "étude"
]

const total_words = male_words.length + female_words.length
let actual_word = ""
let isGameOn = false
let nQuestion = 1

function incrementQuestion() {
    if(nQuestion < total_words){
        nQuestion++;
        const numQuestion = document.getElementById("numQuestion");
        numQuestion.innerHTML = `${nQuestion}/${total_words}`;
    }
}

function random_word() {
    return 0
}

btnPlay.addEventListener("click", () => {
    const divGame = document.getElementById("divGame")
    divGame.innerHTML = `
        <div class="container divPreguntas">
            <p id="numQuestion">1/${total_words}</p>
            <h2>Chien</h2>
            <button type="button" class="btn btn-dark" id="btnMale">Masculin</button>
            <button type="button" class="btn btn-dark" id="btnFemale">Féminin</button>
        </div>

        <div class="d-flex flex-row justify-content-center">
            <div class="mx-3">
                <h3>Correct</h3>
                <ul>
                    <li>Elemento 1</li>
                    <li>Elemento 2</li>
                    <li>Elemento 3</li>
                </ul>
            </div>
            <div class="mx-3">
                <h3>Incorrect</h3>
                <ul>
                    <li>Elemento 1</li>
                    <li>Elemento 2</li>
                    <li>Elemento 3</li>
                </ul>
            </div>
            
        </div>
    `
    isGameOn = true
})

document.addEventListener("click", function(event) {
    if (event.target && event.target.id === "btnMale") {
        incrementQuestion()
    }
});

document.addEventListener("click", function(event) {
    if (event.target && event.target.id === "btnFemale") {
        incrementQuestion()
    }
});




