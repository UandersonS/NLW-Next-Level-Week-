const map = L.map('mapid').setView([-27.2200021,-49.6491757], 15)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);
//popup alter localization
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

document.querySelector('[name=lat]').value = lat;
document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

function addPhotoField(){
    //pegar container de fotos
    const container = document.querySelector('#images')

    //pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada de
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio, se sim, nao adcionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value==""){
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value=""
    //adcionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <2){
        //limapar o valor do campo 
        span.parentNode.children[0].value=""
        return
    }
    ///deletar o campo
    span.parentNode.remove();

}
//troca do sim e nao
function toggleSelect(event){

    //retirar a classe .active(dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach((button)=>button.classList.remove('active'))//funcao
    //colocar a classe .active(dos botoes)
    const button=  event.currentTarget
    button.classList.add('active')
    //atualizar o meu input
    const input= document.querySelector('name="open_on_weekends"')
    
    input.value = button.dataset.value

}