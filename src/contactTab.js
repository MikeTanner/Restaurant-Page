import { titleDivMaker } from "./homeTab";
const create = (container) => {
    const title = titleDivMaker("Contact Information");
    const contact = contactInfo();
    container.append(title,contact)
}

const contactInfo = () => {
    const container = document.createElement("div")
    container.classList.add("contactInfo")
    const smallTitle = document.createElement("h2")
    smallTitle.innerHTML = "Greg_forbes@gregoly.com"
    const content = document.createElement("p")
    content.innerHTML = "920-442-0333";
    container.append(smallTitle, content)

    return container;
}
export {
    create
}