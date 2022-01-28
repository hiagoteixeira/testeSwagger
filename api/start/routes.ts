import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
    return { hello: 'world' }
})

Route.group(() => {
    Route.get('/abstract', 'AbstractsController.statusText');

}).prefix('/api');
