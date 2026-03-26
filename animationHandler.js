document.addEventListener("DOMContentLoaded", function () {
    // Import Buttons
    var profileButton = document.getElementById("profileButton");
    var projectsButton = document.getElementById("projectsButton");
    var gamesButton = document.getElementById("gamesButton");
    // Import profile page
    var profilePanel = document.getElementById("profilePanel");
    var infoPanel = document.getElementById("infoPanel");
    var sidePanel = document.getElementById("sidePanel");
    var profileActive = true, projectsActive = false, gamesActive = false;
    function animateProfilePageOut() {
        profilePanel.style.animation = "windowDown 0.4s ease forwards";
        infoPanel.style.animation = "windowDown 0.4s ease forwards";
        sidePanel.style.animation = "windowDown 0.4s ease forwards";
    }
    function closeCurrentPage() {
        if (profileActive == true && projectsActive == false && gamesActive == false) { // if Profile Page is active
            animateProfilePageOut();
        }
        else if (profileActive == false && projectsActive == true && gamesActive == false) { // if Projects Page is active
        }
        else if (profileActive == false && projectsActive == false && gamesActive == true) { // if Games Page is active
        }
    }
    profileButton.addEventListener("click", function () {
        animateProfilePageOut();
    });
});
//test
