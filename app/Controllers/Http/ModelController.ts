import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios = require('axios')


export default class ModelController {
    index({ params, view }: HttpContextContract) {
        let make = params.make
        make = make.replace('%20', ' ')
        const page_title = `Models of ${make}`
		const breadcrumb = [{text: 'Makes', route: 'make'}] 

        return view.render('model/index', { page_title, breadcrumb })
    }

}