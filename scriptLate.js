// ------------------------------------------------------- DOC VIEWER V2 ---------------------
//Global var for doc viewer
var docRenderWindow = document.getElementById("docRenderWindow");
var docPage = docRenderWindow.contentWindow.document.getElementById("page-container");

// HTML FAB
const fabHtml = "<div class='fab c x5 y3 w4 h4'><li><span>Comments</span><svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' width='80%' fit=' preserveAspectRatio='xMidYMid meet' focusable='false'><path d='M0 0h24v24H0V0z' fill='none'></path><path d='M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z'></path></svg></li><li><span>Favorites</span><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='80%' fit=' preserveAspectRatio='xMidYMid meet' focusable='false'><path d='M0 0h24v24H0V0z' fill='none'></path><path d='M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'></path></svg></li></div>"



//Runs code after iframe is loaded
docRenderWindow.addEventListener('load' , function() {
        const docPage = docRenderWindow.contentWindow.document.getElementsByClassName("pf");
        const docPageContainer = docRenderWindow.contentWindow.document.getElementById("page-container");
        const docPageSidebar = docRenderWindow.contentWindow.document.getElementById("sidebar");
        




        //Creates a css and injects it into iframe HTML file to be able to control alla styles inside iFrame with css document
        const link = document.createElement("link");
        link.href = "../styles/docStyle.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementById("docRenderWindow").contentWindow.document.head.appendChild(link);


        // Removes background from document and document container
        docPageContainer.style.background = "none";
        docPageSidebar.style.background = "none";
        
        for (let i = 0; i < docPage.length; i++) {
            const element = docPage[i];
            element.insertAdjacentHTML('beforeend', fabHtml);
        
        //set shadow off all pages
            element.style.boxShadow = "0 3px 10px #ddd"
        
        // Makes FAB vissible outside page
            element.style.overflow = "visible";

        // Sets margin top on all pages except the first one
            if (i > 0) {
                element.style.margin = "120px auto auto auto";
            }
        }
    });





    //Pressing enter in password input will run the log in function
    const paswordInput = document.getElementById("logInScreen").children[0].children[2];
    paswordInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            logIn();
        }
    });

    
    

//Importing json for log in system
let usrs;
fetch("json/usrs.json")
.then(function(resp) {
    return resp.json();
})
.then(function(data) {
    usrList = data.usrs
    
});

// //log in function using json data from above
function logIn() {
    let usrNme = document.getElementById("usrNme").value;
    let psWrd = document.getElementById("psWrd").value;


    for (let i = 0; i < usrList.length + 1; i++) {
        const user = usrList[i];


        if (usrNme == user.name && psWrd == user.pass) {
            document.getElementById("logInScreen").style.display = "none";
            document.getElementById("siteContainer").style.display = "block";
            break;
        } else if (i == usrList.length - 1) {
            document.getElementById("wrongPass").style.display = "block";
            break;
        };
    }

     
}

document.getElementById("logInScreen").style.display = "none";
document.getElementById("siteContainer").style.display = "block";


// // STYLE
// width: 30px;height: 80px;background-color: #f5f5f5;display: flex;flex-direction: column;padding: 5px;border-radius: 7px;box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);margin-bottom: 10px;

// HTML
//<div class="fab"><svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg></div>

// BOTH
// <div class='fab' style='width: 30px;height: 80px;background-color: #f5f5f5;display: flex;flex-direction: column;padding: 5px;border-radius: 7px;box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);margin-bottom: 10px;'><svg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 24 24' width='100%' fit=' preserveAspectRatio='xMidYMid meet' focusable='false'><path d='M0 0h24v24H0V0z' fill='none'></path><path d='M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z'></path></svg><svg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 24 24' width='100%' fit=' preserveAspectRatio='xMidYMid meet' focusable='false'><path d='M0 0h24v24H0V0z' fill='none'></path><path d='M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'></path></svg></div>

// c x5 y3 w4 h4