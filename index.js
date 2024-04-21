const words = {
    "masculin": [
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
        "bijou",
        "lait",
        "matin",
        "miel",
        "regard",
        "sac à dos",
        "nez",
        "mot",
        "arrêt",
        "mur",
        "couple",
        "bracelet",
        "sel",
        "sang",
        "signe",
        "serpent",
        "sigle",
        "sourire",
        "légume"
    ],
    "feminin": [
        "une analyse",
        "une annonce",
        "une armoire",
        "une attaque",
        "une augmentation",
        "forêt",
        "une chaussette",
        "une chaleur",
        "une affiche",
        "une comète",
        "la jalousie",
        "une voiture",
        "une fusée",
        "une couleur",
        "une dent",
        "une douleur",
        "une équipe",
        "une asperge",
        "une étude",
        "une fin",
        "la faim",
        "une épaule",
        "une lèvre",
        "une limite",
        "une nappe",
        "une carte",
        "une mer",
        "une pêche",
        "une méthode",
        "une peur",
        "une minute",
        "la cuisse",
        "une haine",
        "une odeur",
        "une origine",
        "une paire",
        "une commande",
        "une peluche",
        "une permission",
        "une planète",
        "une assiette",
        "une montre",
        "une seconde",
        "la sueur",
        "une fourchette",
        "une robe",
        "une vidéo",
        "une chaussure"
    ]
}

const questions = 30

function update_num_question() {
    if (numQuestion < questions) {
        numQuestion++
    }
    const pQuestion = document.getElementById("pQuestion")
    pQuestion.innerHTML = `${numQuestion}/30` 
}

function random_word() {
    if (numQuestion < questions) {
        let num = Math.floor(Math.random() * 2)
    
        if (num == 0) {
            let pos = Math.floor(Math.random() * words.masculin.length)
            //console.log(words.masculin[pos])
            return words.masculin[pos]
        }
        else {
            let pos = Math.floor(Math.random() * words.feminin.length)
            //console.log(words.feminin[pos])
            return words.feminin[pos]
        }
    }
}

function check_ans(gender) {
    return words[gender].includes(word_display)
}

let numQuestion = 1
let word_display = random_word()

const word = document.getElementById("word")
word.innerHTML = word_display

const btnMale = document.getElementById("btnMale")
const btnFemale = document.getElementById("btnFemale")

btnMale.addEventListener("click", () => {
    if (numQuestion < questions) {
        const pRes = document.getElementById("pRes")
        pRes.classList.remove("right", "wrong")

        if (check_ans("masculin")) {
        pRes.classList.add("right")
        pRes.innerHTML = "Correct"
        }
        else {
            const lWrongAns = document.getElementById("lWrongAns")
            lWrongAns.innerHTML += `<li>${word_display}</li>`
            pRes.classList.add("wrong")
            pRes.innerHTML = "Incorrect"
        }
        update_num_question()
        word_display = random_word()

        const word = document.getElementById("word")
        word.innerHTML = word_display
    }

})

btnFemale.addEventListener("click", () => {
    if (numQuestion < questions) {
       const pRes = document.getElementById("pRes")
        pRes.classList.remove("right", "wrong")
        if (check_ans("feminin")) {
            pRes.classList.add("right")
            pRes.innerHTML = "Correct"
        }
        else {
            const lWrongAns = document.getElementById("lWrongAns")
            lWrongAns.innerHTML += `<li>${word_display}</li>`
            pRes.classList.add("wrong")
            pRes.innerHTML = "Incorrect"
        }
        update_num_question()
        word_display = random_word()

        const word = document.getElementById("word")
        word.innerHTML = word_display 
    }
})