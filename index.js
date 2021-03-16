const $ = document.querySelector // selector
const $$ = document.querySelectorAll //  selector ALL 

let comics = [] // guarda data de comics  API
let characters = [] // guarda data de personajes API 

const API_KEY = "b1ee9360739b9c7554ec7be096d4d06f"
const URLMARVEL ="https://gateway.marvel.com/v1/public"

let offset = 0 
let page = 0 
let lastsearch = ""
let ComicsInPage = 20

const form = $(".form-search");
const mainSeccion = $(".main-section");
const resultsTitle = $(".results-title-container"); // div contenedor 
const resultsCards = $(".results-cards-container");
const resultsNumberTitle = $(".results-found");
const loader = $(".loader-container");

const buttonSearch = $(".search-button");
const pageButton = $$ (".page-button") ; 

const previusPageButton = $(".previous-page") ;
const nextPageButton = $(".next-page");
const lastPageButton = $(".last-page") ;
const firstPageButton = $(".first-page") ;




/**  RUTAS */
const getComics = `${URLMARVEL}/comics?apikey=${API_KEY}`;
const getCharacters = `${URLMARVEL}/characters?apikey=${API_KEY}`;
const getCharactersNextPage = `${getCharacters}&offset=${page *ComicsInPage}&orderBy=name`



/**  FUNCIONES */



const deleteHTML = (element) => {
    element.innerHTML = ``;
  }
  
  const hidde = (element) => {
    element.classList.add("is-hidden")
  }
  
  const show = (element) => {
    element.classList.remove("is-hidden")
  }