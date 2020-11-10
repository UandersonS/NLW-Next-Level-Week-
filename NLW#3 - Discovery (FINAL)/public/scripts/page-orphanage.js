const options = {
    dragging: false,
    touches: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create map
const map = L.map('mapid', options).setView([lat, lng], 15);

//creat and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


//popup alter localization
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})
//create popup overlay
L.marker([lat, lng], { icon }).addTo(map)




function selectImage(event) {
    const button = event.currentTarget
    console.log(button.children)
    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    //atualizar container de image
    imageContainer.src = image.src

    //adcionar a classe .active para este botao
    button.classList.add("active")

}