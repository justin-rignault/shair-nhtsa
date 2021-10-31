'use strict'

const removeInvalidClass = ev => {
    if(ev.target.value) return ev.target.classList.remove('is-invalid')
    return ev.target.classList.add('is-invalid')
}

const getModels = () => {
    const year = document.getElementById('year').value
    const make = document.getElementById('make').value
    if(!year) return $('#year').addClass('is-invalid')
    
    $('#spinner').removeClass('d-none')
    fetch(`/api/model/${make}/${year}`)
        .then( response => response.json())
        .then( data => {
            $('#model-information').removeClass('d-none')
            $('#spinner').addClass('d-none')

            const modelsDiv = $('[data-models]')
            modelsDiv.empty()
            data.forEach( model => {
                modelsDiv.append(`<input readonly type="text" class="form-control mr-5 mb-5" style="width: 250px" value="${model}">`)
            })
        })
        .catch( error => {
            console.error(error)
        })
}


const init = () => {
    $('#year').mask('0000')
    document.getElementById('search').addEventListener('click', getModels)
    document.getElementById('year').addEventListener('keyup', removeInvalidClass)
}

document.addEventListener('DOMContentLoaded', init)