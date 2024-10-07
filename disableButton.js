let nxtBtn = document.querySelector(".NextButton");
let customBtn = document.createElement('button');

customBtn.innerHTML = " → ";
customBtn.style.backgroundColor = "#315de1";
customBtn.style.border = "none";
customBtn.style.color = "#fff";
customBtn.style.padding = "8px 20px";
customBtn.style.cursor = "pointer";
customBtn.style.margin = "2px";
customBtn.style.textAlign = "center";
customBtn.style.transition = "background .3s";
customBtn.style.borderRadius = "3px";

nxtBtn.parentNode.replaceChild(customBtn, nxtBtn);


customBtn.addEventListener("click", (e) => {
    let input = document.querySelector("input");
    let text = input.value;
    
    if (text.length < 3 || /^\s+$/.test(text)) {
        window.alert("Debe escribir al menos 3 caracteres");
        
        e.preventDefault();
        //e.stopPropagation();
          //e.stopImmediatePropagation();
        
    } else {
        customBtn.disabled = true;
        nxtBtn.click();
    }
    
})