import missionStatementImg from "../assets/tacoMonster.gif"
const create = (container) => {
    const title = titleDivMaker("Greg's Food Restaurant");
    const missionDiv = missionStatement()
    container.append(title,missionDiv);
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

export {create}