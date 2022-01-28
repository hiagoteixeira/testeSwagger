import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AbstractsController {

    /**
  * @swagger
  * /api/abstract:
  *   get:
  *     tags:
  *       - Test
  *     summary: Sample API
  *     responses:
  *       200:
  *         description: Testing swagger api
  *         example:
  *           message: It Works
  */
    public async statusText() {
        const response = 200;
        return response;
    }

}
