/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('', ({ view }) => view.render('welcome')).as('home')
Route.get('vin', 'VinController.index').as('vin')
Route.get('makes', 'MakeController.index').as('make')
Route.get('makes/:make', 'ModelController.index')

Route.group( () => {

    Route.get('vin/:number', 'VinController.search')
    Route.get('makes/list', 'MakeController.list')

}).prefix('api')
