// Sempre que a página carregar ou recarregar
window.addEventListener('load', () => {
    // Remove hash da URL
    history.replaceState(null, '', window.location.pathname);

    // Sobe a página suavemente até o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let cont = 1;

document.getElementById("radio1").checked = true; 

setInterval(function() {
    nextImg();
}, 5000);

function nextImg() {
    cont++;
    if (cont > 4) {
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true;
}

