const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (eventObj) => {
    if (eventObj.target.id === "rideTicketPurchased") {
        const rideEvent = new CustomEvent("rideTicketPurchased") 
        dispatchEvent(rideEvent)
        console.log(dispatchEvent(rideEvent))
    }
    
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

