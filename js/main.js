function getData() {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(response => response.json())
    .then(card => {
        console.log(card) 
        let id = (card.data[0].id)
        let name = (card.data[0].name)
        let type = (card.data[0].type)
        let effect = (card.data[0].desc)
        let price = (card.data[0].card_prices[0].tcgplayer_price)
        document.querySelector('#cardID').innerHTML = id
        document.querySelector('#cardName').innerHTML = name
        document.querySelector('#Type').innerHTML = type
        document.querySelector('#Effect').innerHTML = effect
        document.querySelector('#Price').innerHTML = price
    })
}