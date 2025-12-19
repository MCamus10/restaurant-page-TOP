function homeTab(){
    const homeContainer = document.createElement("div");
    homeContainer.className = "tab";
    homeContainer.id ="home-tab";

    const homeContent = document.createElement("p");
    homeContent.textContent = "Welcome to our restaurant, a place where good food and great company come together. We focus on quality ingredients, fresh flavors, and a welcoming atmosphere. Whether you’re here for a quick bite or a relaxed meal, we’re happy to have you."
    
    homeContainer.appendChild(homeContent);

    const container = document.getElementById("content");
    container.appendChild(homeContainer);
};

export default homeTab;