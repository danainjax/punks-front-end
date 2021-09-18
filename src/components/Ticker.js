class Ticker {
    constructor(data) {
        this.data = data;
        
    }

    static getTicker = () => {
        console.log('new ticker')
       
        return fetch('https://api.cryptonator.com/api/ticker/eth-usd')
        .then(response => response.json())
     
            .then(resp => {
                const eth = resp.ticker 
                document.getElementById('ticker').innerText += `${eth.base}...${eth.target}...${eth.price}...${eth.volume}...${eth.change}`
            }
            


)
    
   
    }





}