import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios = require('axios')

export default class HomeController {
    async index({ view }: HttpContextContract) {
        const page_title = `Search By VIN`

        return view.render('home/index', { page_title })
    }


    /*** API Functions ***/
    async search({ params, response }: HttpContextContract) {
        try {
            const vin = params.number
            
            const axiosResponse = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
            const results = axiosResponse.data.Results

            const year = results.find( item => item.Variable === 'Model Year' && item)
            const make = results.find( item => item.Variable === 'Make' && item)
            const model = results.find( item => item.Variable === 'Model' && item)

            const vehicleInformation = {
                make: make.Value || 'Make Unkown',
                year: year.Value || 'Year Unknown',
                model: model.Value || 'Model Unknown'
            }
            
            return response.json(vehicleInformation)
        } catch (error) {
            console.error(error.messages || error)
            return response.status(500).json({ message: 'An unexpected error has occured. Please try again.' })
        }
    }

}
