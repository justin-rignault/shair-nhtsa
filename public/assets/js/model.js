'use strict'

const removeInvalidClass = ev => {
    ev.preventDefault()
    if(!ev.target.value) return ev.target.classList.add('is-invalid')

    submitForm(ev)
    return ev.target.classList.remove('is-invalid')
}

const submitForm = ev => {
    if(ev.code === 'Enter') getModels()
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
            
            if(data.length > 0) {
                data.forEach( model => {
                    modelsDiv.append(`<input readonly type="text" class="form-control mr-5 mb-5" style="width: 250px" value="${model}">`)
                })
            } else modelsDiv.append(`<h6 class="mt-5">No models found for selected year <br> Please choose a different year</h6>`)
        })
        .catch( error => {
            console.error(error)
        })
}


const init = () => {
    $('#year').mask('0000')
    document.getElementById('search').addEventListener('click', getModels)
    document.getElementById('year').addEventListener('keyup', removeInvalidClass)
    document.getElementById('model_form').addEventListener('submit', ev => ev.preventDefault())
}

document.addEventListener('DOMContentLoaded', init)