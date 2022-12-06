import { titleDivMaker } from "./homeTab";


const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
const images = importAll(require.context('../assets', false, /\.(gif|png|jpe?g|svg)$/));
const create = (container) => {
    const title = titleDivMaker("Menu")
    const sidesTitle = titleDivMaker("Sides")
    const beverageTitle = titleDivMaker("Beverages")
    const entreeTitle = titleDivMaker("Entrees")
    const menuItem = card("lemon", "dekasdlf", "#4", cache["./enchalada.jpeg"])    
    container.append(title, sidesTitle,menuItem)
}
const card = (...cardArray) => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("menuItem")
    const nameTitle = document.createElement("h3")
    const description = document.createElement("p")
    const menuPrice = document.createElement("h4")
    const picture = document.createElement("img")
    const cardElementArray = [nameTitle, description, menuPrice, picture]
    for (let i = 0; i < cardArray.length-1; i++) {
       cardElementArray[i].innerHTML = cardArray[i]
    }
    picture.src = cardArray[3];
    cardElementArray.forEach((elem)=> {
        cardDiv.appendChild(elem)
    })
    return cardDiv
}
const sideItemGen = () => {
    //gen sides
}
const mainItemGen = () => {
    //gen main items
}
const drinkItemGen = () => {
    //gen drink items
}



export {create}