
const initButtons= () => {
    const homeBtn = document.getElementById("homeBtn")
    homeBtn.addEventListener("click",() => {
        homeTab();
    })
    const menuBtn = document.getElementById("menuBtn") 
    menuBtn.addEventListener("click", () => {
        menuTab();
    })
    const contactBtn = document.getElementById("contactBtn") 
    contactBtn.addEventListener("click", () => {
        contactTab();
    })
}
const container = document.querySelector(".content")

const clearContainer = () => {
    container.innerHTML = "";
}

const homeTab = () => {
    clearContainer();
    console.log("home Tab pressed");
    const title = titleDivMaker("Greg's Food Restaurant");
    container.appendChild(title)

}
const menuTab = () => {
    console.log("menu tab pressed");
    
}
const contactTab = () => {
    console.log("contact tab pressed"); 
}
const titleDivMaker = (content) =>{
    const titleDiv = document.createElement("p");
    titleDiv.classList.add("title")
    titleDiv.innerHTML = content;
    return titleDiv;
}
export { initButtons};