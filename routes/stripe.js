/**
 * @swagger
 * definitions:
 *   Error:
 *      properties:
 *          code:
 *              type: string
 *              example: USR_02
 *          message:
 *              type: string
 *              example: The field example is empty
 *          field:
 *              type: string
 *              example: example
 *          status:
 *              type: integer
 *              example: 500
 */
/**
 * @swagger
 * tags:
 *   - name: Stripe
 *     description: "Everything about Stripe Ingregation and Webhooks"
 * /stripe/charge:
 *   post:
 *      summary: This method receive a front-end payment and create a chage.
 *      tags: 
 *          - Stripe
 *      produces:
 *        - application/json
 *      description: "You can send a cart informations and payment token (https://stripe.com/docs/api/tokens)."
 *      parameters: 
 *          - name: stripeToken
 *            in: formData
 *            description: "The API token, you can use this example to get it: https://stripe.com/docs/stripe-js/elements/quickstart"
 *            required: true
 *            type: string
 *          - name: order_id
 *            in: formData
 *            description: The order ID recorded before (Check the Order Documentation)
 *            required: true
 *            type: string
 *          - name: description
 *            in: formData
 *            description: Description to order.
 *            required: true
 *            type: string
 *          - name: amount
 *            in: formData
 *            description: "Only numbers like: 999"
 *            required: true
 *          - name: currency
 *            in: formData
 *            description: "Check here the options: https://stripe.com/docs/currencies, the default. \nDefault value : USD"
 *            required: true
 *      responses:
 *       200:
 *         description: Object from stripe
 *       400:
 *         description: Return an error object
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 */
/**
 * @swagger
 * /stripe/webhooks:
 *   post:
 *      summary: Endpoint that provide a synchronization
 *      tags: 
 *          - Stripe
 *      description: "You need put this endpoint in the stripe webhooks (https://dashboard.stripe.com/account/webhooks), so get there the end-point secrete key."
 *      produces:
 *        - application/json
 *      responses:
 *       200:
 *         description: This endpoint is used by stripe
 */