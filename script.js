const fetchadvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    document.querySelector("#quoteid").innerHTML = `${data.slip.id}`;
    document.querySelector("#quote").innerHTML = `"${data.slip.advice}"`; 
}