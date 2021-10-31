import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios = require('axios')


export default class ModelController {
    index({ params, view }: HttpContextContract) {
        let make = params.make
        make = make.replace('%20', ' ')
        const page_title = `Models of ${make}`
		const breadcrumb = [{text: 'Makes', route: 'make'}] 

        return view.render('model/index', { page_title, breadcrumb, make })
    }

    /*** API Functions ***/
    async search({ params, response }: HttpContextContract) {
        const { make, year } = params

        const axiosResponse = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`)
        let results = axiosResponse.data.Results

        const models = results.map( r => r.Model_Name)        

        return response.json(models)
    }

}