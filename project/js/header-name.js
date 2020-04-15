function inputName(){
    let logoutName = document.getElementById("logout-name");
    let logoutInput = document.getElementById("logout-input")
    let name = logoutName.textContent.trim();
    logoutName.classList.add('hidden');
    logoutInput.classList.remove('hidden');
    logoutInput.value = name;
    logoutInput.focus();
}

function applyName(){
    let logoutName = document.getElementById("logout-name");
    let logoutInput = document.getElementById("logout-input");
    let name = logoutInput.value.trim();
    logoutName.classList.remove('hidden');
    logoutInput.classList.add('hidden');
    if (name != ""){
        logoutName.textContent = name;
    }
}

document.getElementById("logout-name").addEventListener("click", () => inputName());
document.getElementById("logout-input").addEventListener("focusout", ()=> applyName());
