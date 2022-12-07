import * as home from "./homeTab";
import * as menu from "./menuTab";
import * as contact from "./contactTab";
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
    homeTab(); //load immediately
}


const container = document.querySelector(".content")

const clearContainer = () => {
    container.innerHTML = "";
}
const currentTab = (() => {
    let page = "";
    const updatePage = (newPage) => {
        page = newPage;
    }
    return {
        getTab() {
            return page;
        },
        updatePage
    }
})()

const homeTab = () => {
    if (currentTab.getTab()=="home") {
        return;
    }
    currentTab.updatePage("home");
    clearContainer();
    console.log("home Tab pressed");
    home.create(container);
    currentTab.updatePage("home");
}
const menuTab = () => {
    if (currentTab.getTab()=="menu") {
        return;
    }
    currentTab.updatePage("menu");
    clearContainer();
    menu.create(container);
    console.log("menu tab pressed");
}
const contactTab = () => {
    if (currentTab.getTab()=="contact") {
        return;
    }
    currentTab.updatePage("contact");
    clearContainer();
    contact.create(container);
    console.log("contact tab pressed"); 
}
export { initButtons};