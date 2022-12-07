import { titleDivMaker } from "./homeTab";


const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
const images = importAll(require.context('../assets', false, /\.(gif|png|jpe?g|svg)$/));
const create = (container) => {
    sideItemGen(container);
    mainItemGen(container);
    drinkItemGen(container);

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
const sideItemGen = (container) => {
    const sidesTitle = titleDivMaker("Sides") 
    const item1= card("Corn", lorem15(), "$3", cache["./mexicanCorn.jpg"])
    const item2= card("Rice", lorem15(), "$2", cache["./rice.jpg"]) 
    
    container.append(sidesTitle,item1,item2)
}
const mainItemGen = (container) => {
    const entreeTitle = titleDivMaker("Entrees")
    const item1= card("Taco", lorem15(), "$4", cache["./taco.jpg"])
    const item2= card("Steak", lorem15(), "$10", cache["./steak.jpg"])
    container.append(entreeTitle,item1,item2)
}
const drinkItemGen = (container) => {
    const beverageTitle = titleDivMaker("Beverages")
    const item1= card("Marg", lorem15(), "$10", cache["./marg.jpg"])
    const item2= card("Punch", lorem15(), "$10", cache["./punch.jpg"])
    container.append(beverageTitle,item1,item2)
    //gen drink items
}
const lorem15 = () => {
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facere! Blanditiis aut asperiores nostrum deserunt."
}



export {create}