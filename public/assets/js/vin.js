'use strict'

const validateSearchQuery = query => {
    if(query.length !== 17) {
        $('#search-error').text('A valid VIN number consists of 17 characters.')
        return false
    }
    $('#search-error').text('')
    return true
}

const searchVIN = e => {
    const searchQuery = document.getElementById('query').value
    const validSearch = validateSearchQuery(searchQuery)
    if(!validSearch) return
    
    const vin = searchQuery
    console.log(vin)
    $('#spinner').removeClass('d-none')
    fetch(`/api/vin/${vin}`)
        .then( response => response.json())
        .then( data => {
            console.log(data)
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