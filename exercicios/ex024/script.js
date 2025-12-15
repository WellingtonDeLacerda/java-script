const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let pas = ""
    res.innerHTML = "<h2>Contando de 1 até 10 e mostrando so os pares</h2><br>"
    for (let c = 10; c >= 1; c--) {
        if (c != 1) {
            pas = " 👉 "
        }else {
            pas = " 🏁 "
        }
        
        res.innerHTML += `${c}${pas}`
    }
})
