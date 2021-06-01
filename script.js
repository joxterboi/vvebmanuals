window.addEventListener('click', function(e) {
    if (!document.getElementById("profileMenu").contains(e.target) && !document.getElementById("profile").contains(e.target) ) {
        closePopup("profileMenu");
    }});

window.addEventListener('click', function(e) {
    if(!document.getElementById("documentPopup").contains(e.target) && !document.getElementById("dontClose").contains(e.target)) {
        // closePopup("documentPopup");
    } if(!document.getElementById("unreadPopup").contains(e.target) && !document.getElementById("dontClose").contains(e.target)) {
        closePopup("unreadPopup");
    }
});


// Stäng flik med mittenklick
// Button = 1 is middle click
window.addEventListener('auxclick', function(e) {
    if (e.button == 1 && e.target.parentElement.className.includes("tab")) {
        closeTab(e.target)
        // closeTab(e.target.parentElement.id);
    }
});

//MENU OPEN AND CLOSE
function welcome() {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("container").style.width = "calc(100vw - 280px)";

    // Closes menue if viewpoort witdh is less then dessired width
    if (window.innerWidth < 1400) {
        closeMenu();
    }
}

function openMenu() {
    document.getElementById("menuArrow").style.display = "block";
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("side-bar").style.transform = "translateX(0px)";
    document.getElementById("container").style.width = "calc(100vw - 280px)";
    document.getElementById("container").style.margin = "0 0 0 280px";
}

function closeMenu() {
    document.getElementById("menuArrow").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("side-bar").style.transform = "translateX(-300px)";
    document.getElementById("container").style.width = "100vw";
    document.getElementById("container").style.margin = "0";
}


// Popups
function closePopup(windowName) {
    document.getElementById(windowName).style.display = "none";
}
function openPopup(windowName) {
    document.getElementById(windowName).style.display = "block";
}


// TABS
function switchTab(elem) {
    // deactivates current active
    var currentActiveTab = document.getElementsByClassName('activeTab');
    if (elem.className == "activeTab tab") {
    } else {    
        currentActiveTab[0].className = "tab";
        // Activates new active
        elem.className = "activeTab tab";
        if (elem.id === "dashboard") {
            document.getElementsByClassName('tabContainer')[0].style.display = "none";
            document.getElementsByClassName('mainContent')[0].style.display = "block";
        } else {
            document.getElementsByClassName('mainContent')[0].style.display = "none";
            document.getElementsByClassName('tabContainer')[0].style.display = "block";
            
            document.getElementById('docRenderWindow').src = 'docs/' + elem.id + '.html';
        }
    }
}

function closeTab(elem) {
    //Hides tab and shows dashboard
    document.getElementsByClassName('tabContainer')[0].style.display = "none";
    document.getElementsByClassName('mainContent')[0].style.display = "block";
    document.getElementById("dashboard").className = "activeTab tab";
    elem.parentElement.style.display = "none";
}

function openTab(elem) {
    // Shows new tab and sets all tabs as inactive
    var currentTab = elem.className.split(" ")[0];
    document.getElementById(currentTab).style.display = "inline-flex";
    
    var currentActiveTab = document.getElementsByClassName('activeTab');
    currentActiveTab[0].className = "tab";

    //Sets new as active
    document.getElementById(currentTab).className = "activeTab tab";

    //Hides dashboard and opens tab, changes document so iframe show the right one
    document.getElementsByClassName('mainContent')[0].style.display = "none";
    document.getElementsByClassName('tabContainer')[0].style.display = "block";
    document.getElementById('docRenderWindow').src = 'docs/' + elem.className + '.html';
    closeAllPopup();
}




// POPUP FOLDER------------------------------------------------------
function displayFolder(elem) {
    document.getElementById("popupTitle").innerHTML = elem.innerHTML;

    for (let i = 0; i < document.getElementsByClassName("folder").length; i++) {
        document.getElementsByClassName("folder")[i].style.background = "none";
    }
    elem.parentElement.style.background = "#E0E0E0";
}

// CLOSEES ALL POPUPS
function closeAllPopup() {
    for (let i = 0; i < 2; i++) {
        document.getElementsByClassName("popupCard")[i].style.display = "none";
        
    }
}




// ------------------------------ Document tree --------------------------------------------------
document.addEventListener("click", function(e) {
        if(e.target.parentElement.classList[0] == "folder" || e.target.parentElement.parentElement.classList[0] == "folder") {
            
        }
});






// -----------------------Doc controls--------------------------
function firstPage() {    
    document.getElementById("docRenderWindow").contentWindow.document.getElementById("pf1").scrollIntoView();    
}


function lastPage() {

    const numberOfPages = docRenderWindow.contentWindow.document.getElementsByClassName("pf").length;
    docRenderWindow.contentWindow.document.getElementsByClassName("pf")[numberOfPages - 1].scrollIntoView()
}









  