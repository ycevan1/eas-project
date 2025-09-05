function customizeGrid(isFromButton) {
    let numSquares;
    let heightAndWidth;
    if (isFromButton) {
        let goodInput = false
        while (goodInput == false) {
            numSquares = prompt("How many squares would you like your grid to have? (max 100)")
            if (numSquares <= 100 && numSquares !== "number") {
                goodInput = true
            }
        }
    } else {
        numSquares = 16
    }
    heightAndWidth = 800 / numSquares

    gridContainer.innerHTML = ""
    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            const cell = document.createElement("div")
            gridContainer.append(cell)
            cell.classList.add("cell")
            cell.style["height"] = heightAndWidth + "px"
            cell.style["width"] = heightAndWidth + "px"
            console.log("working2")
        }
    }
    const cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            e.target.style["background-color"] = "green"
        })
    })
}

const gridContainer = document.querySelector(".grid-container")
const gridCustomizeButton = document.getElementById("change-grid")


customizeGrid(false)

gridCustomizeButton.addEventListener("click", () => {
    customizeGrid(true)
})