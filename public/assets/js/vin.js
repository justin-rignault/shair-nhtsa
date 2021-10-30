'use strict'

const searchVIN = e => {
    const searchQuery = document.getElementById('query').value
    if(searchQuery.length !== 17) return
    
    const vin = searchQuery

    $('#spinner').removeClass('d-none')
    fetch(`/api/vin/${vin}`)
        .then( response => response.json())
        .then( data => {
            $('#vehicle-information').removeClass('d-none')
            $('#year').val(data.year)
            $('#make').val(data.make)
            $('#model').val(data.model)
            $('#spinner').addClass('d-none')
        })
        .catch( error => {
            console.error(error)
        })
}

const init = () => {
    document.getElementById('search').addEventListener('click', searchVIN)
}

document.addEventListener('DOMContentLoaded', init)