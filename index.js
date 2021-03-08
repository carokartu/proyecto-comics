const $ = document.querySelector // selector
const $$ = document.querySelectorAll //  selector ALL 

let comics = [] // guarda data de comics  API
let characters = [] // guarda data de personajes API 


const API_KEY = ".."
const BASE_URL ="__"

let offset = 0 
let page = 0 
let lastsearch = ""

const form = $(".form-search");
const mainSeccion = $(".main-section");
const resultsTitle = $(".results-title-container"); // div contenedor 
const resultsCards = $(".results-cards-container");
const resultsNumberTitle = $(".results-found")
const loader = $(".loader-container")

