document.addEventListener("DOMContentLoaded", () => {

    // Import Buttons
    const profileButton = document.getElementById("profileButton") as HTMLElement;
    const projectsButton = document.getElementById("projectsButton") as HTMLElement;
    const gamesButton = document.getElementById("gamesButton") as HTMLEmbedElement;
    // Import profile page
    const profilePanel = document.getElementById("profilePanel") as HTMLElement;
    const infoPanel = document.getElementById("infoPanel") as HTMLElement;
    const sidePanel = document.getElementById("sidePanel") as HTMLElement;

    let profileActive: boolean = true, projectsActive: boolean = false, gamesActive: boolean = false;

    function animateProfilePageOut(): void{
        profilePanel.style.animation = "windowDown 0.4s ease forwards";
        infoPanel.style.animation = "windowDown 0.4s ease forwards";
        sidePanel.style.animation = "windowDown 0.4s ease forwards";
    }

    function closeCurrentPage(): void{
        if (profileActive == true && projectsActive == false && gamesActive == false){ // if Profile Page is active
            animateProfilePageOut()
        } else if (profileActive == false && projectsActive == true && gamesActive == false){// if Projects Page is active

        } else if (profileActive == false && projectsActive == false && gamesActive == true){// if Games Page is active

        }
    }

    profileButton.addEventListener("click", () => {
        animateProfilePageOut()
    })
});

//test