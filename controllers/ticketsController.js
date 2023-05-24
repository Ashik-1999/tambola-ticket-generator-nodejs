const generateTambolaTickets = require('../public/js/generateTicket')
const Ticket = require('../models/ticketSchema')

const createTambolaTickets = async(req, res) => {
    try {
        const tickets = {}
        for (let index = 0; index < req.body.count; index++) {
            const uniqueId =  `ticket${index+1}`
            tickets[uniqueId] = generateTambolaTickets()  
        }  
        const newTicket = new Ticket({
            uniqueId: Date.now(),
            tickets: tickets
        })
        const savedTickets = await newTicket.save()
        

        res.status(200).json(savedTickets)
    } catch (error) {
        res.status(500).json(error)
    }
    
}

const getTambolaTicketsById = async(req, res) => {
    console.time('API response time')
    try {
        
    
        const {id} = req.params
        const page = parseInt(req.query.page) || 1
        const limit = 3
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const ticketsById = await Ticket.find({uniqueId: id})
        const ticketIds = Object.keys(ticketsById[0].tickets)
        const paginatedTicketIds = ticketIds.slice(startIndex, endIndex)
            
        if(paginatedTicketIds.length == 0) res.json("Enter valid page number")

        else{
            const ticketList = paginatedTicketIds.map((ticketId) =>ticketsById[0].tickets[ticketId])

            res.status(200).json(ticketList)
            console.timeEnd('API response time')
        }
       
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error)
    }
   
}

module.exports = {
    createTambolaTickets,
    getTambolaTicketsById
}