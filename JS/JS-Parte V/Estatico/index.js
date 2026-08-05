// Mini sistema para Reservas num Hotel e suas taxas para hospedagem

class Reservation{
    constructor(guests, room, days){
        this.guests = guests
        this.room = room
        this.days = days
        this.totalValue = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee(){
        console.log(`A taxa base é: ${Reservation.baseFee}`)
    }

    static get premiumBaseFee(){
        return Reservation.baseFee * 2
    }
}

r1 = new Reservation(4, '- 320 - ', 4)
console.log(r1)
Reservation.showBaseFee()
console.log(Reservation.premiumBaseFee)

Reservation.baseFee = Reservation.premiumBaseFee // Colocando como Taxa Premium
r2 = new Reservation(3, '- 410 - ', 7)
console.log(r2)

// Normalmente os atributos Static são valores globais para todas as classes e normalmente seu valor não é alterado