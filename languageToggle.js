
function checkLanguagePref() {
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.langPref) {
            console.log("lang pref: " + sessionStorage.langPref);
            if(sessionStorage.langPref == 'en') {
                document.getElementById("radio-a").checked = true;
                document.getElementById("radio-b").checked = false;
                for(let i=0; i< document.getElementsByClassName('english').length; i++) {
                    document.getElementsByClassName('english')[i].style.display = 'block';
                }
                for(let i=0; i< document.getElementsByClassName('french').length; i++) {
                    document.getElementsByClassName('french')[i].style.display = 'none';
                }
            }
            if(sessionStorage.langPref == 'fr') {
                document.getElementById("radio-a").checked = false;
                document.getElementById("radio-b").checked = true;
                for(let i=0; i< document.getElementsByClassName('english').length; i++) {
                    document.getElementsByClassName('english')[i].style.display = 'none';
                }
                for(let i=0; i< document.getElementsByClassName('french').length; i++) {
                    document.getElementsByClassName('french')[i].style.display = 'block';
                }
            } 
        } else {
            sessionStorage.langPref = 'en';
            toggleEN();
        }
    } 
    else {
        console.log("Sorry, your browser does not support web storage...");
    }
}

function toggleFR() {
    if (sessionStorage.langPref) sessionStorage.langPref = 'fr';
    document.getElementById("radio-a").checked = false;
    document.getElementById("radio-b").checked = true;
    for(let i=0; i< document.getElementsByClassName('english').length; i++) {
        document.getElementsByClassName('english')[i].style.display = 'none';
    }
    for(let i=0; i< document.getElementsByClassName('french').length; i++) {
        document.getElementsByClassName('french')[i].style.display = 'block';
    }
}

function toggleEN() {
    if (sessionStorage.langPref) sessionStorage.langPref = 'en';
    document.getElementById("radio-a").checked = true;
    document.getElementById("radio-b").checked = false;
    for(let i=0; i< document.getElementsByClassName('english').length; i++) {
        document.getElementsByClassName('english')[i].style.display = 'block';
    }
    for(let i=0; i< document.getElementsByClassName('french').length; i++) {
        document.getElementsByClassName('french')[i].style.display = 'none';
    }
}

function goBack() {
    window.history.back();
}