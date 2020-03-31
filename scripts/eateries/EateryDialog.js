import { useEateries } from "./EateryDataProvider.js"

const contentTargetTwo = document.querySelector(".preview__eatery")

const contentTarget = document.querySelector(".eateryDialog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("eateryDetailBtnClicked", customEvent => {
    // Get the eatery id
    const eateryId = customEvent.detail.clickedEatery

    const eateryArray = useEateries()

    // Find returns the very first object that matches the condition in the callback function
    const iFoundYou = eateryArray.find(
        (currentEatery) => {
            if (currentEatery.id === parseInt(eateryId)) {
                return true
            }
            return false
        }
    )

    EateryDialog(iFoundYou)

    const myEateryDialog = document.querySelector(".eateryDialog")
    myEateryDialog.showModal()
})

export const EateryDialog = (eateryObject) => {

    contentTargetTwo.innerHTML = `        
        <section class="eatery">
            <h4>${eateryObject.businessName}</h>
            <p>${eateryObject.description}</p>
            <p>${eateryObject.city}</p>
            <p>${eateryObject.state}</p>
        </section>  
    `
}
