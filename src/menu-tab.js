function menuTab(){
    const menuContainer = document.createElement("div");
    menuContainer.className = "tab";
    menuContainer.id = "menu-tab";

    const menuContent = document.createElement("p");
    menuContent.textContent = "Our menu offers a selection of carefully prepared dishes made with fresh, high-quality ingredients. From classic favorites to seasonal specialties, each plate is crafted to deliver flavor and satisfaction. We aim to offer something for everyone to enjoy."

    menuContainer.appendChild(menuContent);

    const container = document.getElementById("content");
    container.appendChild(menuContainer);
};

export default menuTab;