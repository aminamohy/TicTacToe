document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    
    menuIcon.addEventListener("mouseover", function () {
        menu.classList.add("active");  
        menuIcon.style.color = "gold"; 
    });

    
    menu.addEventListener("mouseleave", function () {
        menu.classList.remove("active"); 
        menuIcon.style.color = "white";  
    });

    menuIcon.addEventListener("mouseleave", function () {
        
        setTimeout(() => {
            if (!menu.matches(":hover")) {
                menu.classList.remove("active");
                menuIcon.style.color = "white";
            }
        }, 200);
    });
});
