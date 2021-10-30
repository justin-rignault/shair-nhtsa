import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios = require('axios')

export default class MakeController {
    index({ view }: HttpContextContract) {
        const page_title = `Makes`

        return view.render('make/index', { page_title })
    }

    /*** API Functions ***/
    async list({ request, response }: HttpContextContract) {
        try {
            const axiosResponse = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json`)
            let results = axiosResponse.data.Results

            const searchQuery = request.input('query')?.generalSearch
            if(searchQuery) {
                results = results.filter( element => element.Make_Name.includes(searchQuery.toUpperCase()))
            }

			return response.status(200).json(results)	
        } catch (error) {
            console.error(error.messages || error)
            return response.status(500).json({ message: 'An unexpected error has occured. Please try again.' })            
        }
        
    }
}