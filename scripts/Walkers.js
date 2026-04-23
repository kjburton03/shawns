import { getWalkers } from "./database.js"

const walkerss = getWalkers()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkerss ) {
        walkerHTML += 
        `<li>${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

console.log(walkerss)