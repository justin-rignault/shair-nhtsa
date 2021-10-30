import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios = require('axios')

export default class MakeController {
    async index({ view }: HttpContextContract) {
        const page_title = `Search By VIN`

        return view.render('home/index', { page_title })
    }
}