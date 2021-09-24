class Ticker {
    constructor(data) {
        this.data = data;
        
    }

    static getTicker = () => {
        return fetch('https://api.cryptonator.com/api/ticker/eth-usd')
        .then(response => response.json())
     
            .then(resp => {
                const eth = resp.ticker 
                const ticker = document.createElement('marquee')
                ticker.innerHTML = `Crypto currency...........${eth.base}...${eth.target}...${eth.price}...${eth.volume}...${eth.change}`
                tickerDiv.appendChild(ticker)
            }
            


)
    
   
    }





}