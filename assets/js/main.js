const MudaNome = document.querySelector(".mudanome")

MudaNome.onclick = function(){
    if (MudaNome.textContent == "Babinski") {
        MudaNome.textContent = "Bobinski"
    } else {
        MudaNome.textContent = "Babinski"

    }
}