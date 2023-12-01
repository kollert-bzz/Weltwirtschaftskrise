document.addEventListener("DOMContentLoaded", function (){
    console.log("loaded")
    ButtonPos()
})

window.addEventListener("resize", ButtonPos)
function ButtonPos(){
    const map = document.getElementById("menu")
    let posval = map.getBoundingClientRect()
    let countries = ["usa", "de", "jp", "arg"]
    let multiplicatorh = [0.37, 0.29, 0.383, 0.785]
    let multiplicatorw = [0.175, 0.495, 0.857, 0.316]
    let size = posval.width * 0.015
    let top = posval.top
    for (let i = 0; i < 4; i++) {
        let country = document.getElementById(`${countries[i]}`)
        country.style.top = `${posval.width * 0.5375  * multiplicatorh[i] + posval.top}px`;
        country.style.left = `${posval.width  * multiplicatorw[i] + posval.left}px`
        country.style.background = "#9191e9"
        country.style.width = `${size}px`
        country.style.height = `${size}px`
        console.log(country)
    }
}

 