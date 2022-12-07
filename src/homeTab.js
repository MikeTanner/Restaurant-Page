import missionStatementImg from "../assets/tacoMonster.gif"
const create = (container) => {
    const title = titleDivMaker("Greg's Food Restaurant");
    const missionDiv = missionStatement()
    const hoursDiv = hoursOfOperation();
    const locationDiv = location();
    container.append(title,missionDiv, hoursDiv, locationDiv);
}
const titleDivMaker = (content) =>{
    const titleDiv = document.createElement("p");
    titleDiv.classList.add("title")
    titleDiv.innerHTML = content;
    return titleDiv;
}

const missionStatement = () => {
    const missionDiv = document.createElement("div")
    const missionImg = document.createElement("img")
    const missionText = document.createElement("p")
    const missionSig = document.createElement("p")
    missionImg.src = missionStatementImg;
    missionDiv.classList.add("missionStatement");
    missionText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. "
    missionSig.innerHTML = "Greg."
    missionDiv.append(missionText,missionSig,missionImg)
    return missionDiv;
}

const hoursOfOperation = () => {
    const container = document.createElement("div")
    container.classList.add("schedule")
    const smallTitle = document.createElement("h2")
    smallTitle.innerHTML = "Hours:"
    container.appendChild(smallTitle)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    days.forEach(((item) => {
        const content = document.createElement("p")
        content.innerHTML = item + ": 8am-8pm";
        container.appendChild(content);
    }))
    return container;
}
const location = () => {
    const container = document.createElement("div")
    container.classList.add("location")
    const smallTitle = document.createElement("h2")
    smallTitle.innerHTML = "Location"
    const content = document.createElement("p")
    content.innerHTML = "313 Greg Zone, Gregland, Ohio";
    container.append(smallTitle, content)

    return container;
}


export {create, titleDivMaker}