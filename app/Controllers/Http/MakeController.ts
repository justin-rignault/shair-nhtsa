import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// const axios = require('axios')

export default class MakeController {
    async index({ view }: HttpContextContract) {
        const page_title = `Makes`

        return view.render('make/index', { page_title })
    }

    /*** API Functions ***/
    async list({ request }: HttpContextContract) {
        console.log(request.all())
    }
}