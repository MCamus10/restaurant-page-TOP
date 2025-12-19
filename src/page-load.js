
function pageLoad(){
    const content = document.getElementById("page-load");
    const mainTitle = document.createElement("h2"); 
    const text = document.createElement("p");

    mainTitle.textContent = "Welcome to my restaurant web page";
    text.textContent = "Welcome to our restaurant, where great food and good moments come together. We use quality ingredients and carefully crafted recipes to offer you a warm and memorable dining experience. Sit back, enjoy, and savor every bite."


    content.appendChild(mainTitle);
    content.appendChild(text);
};

export default pageLoad;

