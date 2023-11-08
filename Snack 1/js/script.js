const bikeItems = [
    {
        model: "Rockrider",
        weight: 15.2,
    },
    {
        model: "Btwin",
        weight: 20,
    },
    {
        model: "Stilus",
        weight: 25,
    },
    {
        model: "Triban",
        weight: 9.99,
    },
    {
        model: "Riverside",
        weight: 24,
    },
]

const [bikeItem, bikeItem1, bikeItem2, lightestBike] = bikeItems;
console.log(lightestBike)
document.querySelector("p").innerHTML = `La bici col peso minore è la ${lightestBike.model} che pesa ${lightestBike.weight}`;