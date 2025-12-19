// import { createElement } from "react";
import "./styles.css";
import pageLoad from "./page-load";
import homeTab from "./home-tab";
import menuTab from "./menu-tab";
import aboutTab from "./about-tab";

const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const aboutButton = document.getElementById("about-btn");

function clearTab(){
    const activeTab = document.querySelector(".tab");
    if (activeTab) activeTab.remove();
}

pageLoad();
homeButton.addEventListener("click", () => {
    clearTab();
    homeTab();
});

menuButton.addEventListener("click", ()=> {
    clearTab();
    menuTab();
});

aboutButton.addEventListener("click", () => {
    clearTab();
    aboutTab();
});



