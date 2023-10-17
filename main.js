// Select the menue Elments
let barsIcon = document.querySelector("i.bars");
let closeIcon = document.querySelector("i.close");
let ulList = document.querySelector("header ul.ul-list");
barsIcon.onclick = () => {
    barsIcon.classList.add('hidden');
    closeIcon.classList.remove("hidden");
    ulList.classList.remove("hide-list");
}
closeIcon.onclick = () => {
    barsIcon.classList.remove('hidden');
    closeIcon.classList.add("hidden");
    ulList.classList.add("hide-list");
}
// End Menue Elements

let settings = {
    'async': true,
    'scrossDomain': true,
    'url':'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
    'method':'GET',
    'headers':{}
}
$.ajax(settings).done(function (res) {
    document.querySelector("span.bit-coin").innerHTML = Number.isInteger(res.bitcoin.usd) ? `$ ${res.bitcoin.usd}` : `$ ${res.bitcoin.usd.toFixed(2)}`;
    document.querySelector("span.either-coin").innerHTML = Number.isInteger(res.ethereum.usd) ? `$ ${res.ethereum.usd}` : `$ ${res.ethereum.usd.toFixed(2)}`;
    document.querySelector("span.dog-coin").innerHTML = Number.isInteger(res.dogecoin.usd) ? `$ ${res.dogecoin.usd}` : `$ ${res.dogecoin.usd.toFixed(2)}`;
})


