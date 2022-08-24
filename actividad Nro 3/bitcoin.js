export default class Bitcoin{

    constructor(){}

     async mostrar_bitcoin(){

        let bitcoin=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false%20Server%20response");

        let lista_bitcoin= await bitcoin.json();
        let filas = [];
        lista_bitcoin.forEach( (element,index) => {
            let fila = `
            <tr>
            <td>${index+1}</td>
            <td><img src="${element.image}" alt=""></td>
            <td>${element.name}</td>
            <td>${element.symbol}</td>
            <td>${element.current_price}</td>
            <td>${element.total_volume}</td>
            </tr>`;
            filas.push(fila);
            
        });
        document.getElementById("tbl_body").innerHTML = filas.join("");
    } 


}

