function aboutTab() {
    const aboutContainer = document.createElement("div");
    aboutContainer.className ="tab";
    aboutContainer.id = "about-tab";

    const aboutContent = document.createElement("p");
    aboutContent.textContent ="Our restaurant was created with a simple idea: serve honest food in a comfortable and friendly environment. We are passionate about cooking and hospitality, and we strive to make every visit a pleasant experience worth repeating."

    aboutContainer.appendChild(aboutContent);

    const container = document.getElementById("content");
    container.appendChild(aboutContainer);
};

export default aboutTab;