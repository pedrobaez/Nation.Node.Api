
/**
* @swagger
* components:
*   schemas:
*     Guests:
*       type: object
*       required:
*         - guest_id
*         - name
*       properties:
*         id:
*           type: Int
*           description: Id of the guest
*         name:
*           type: string
*           description: The name of the guest
*       example:
*         guest_id: 1
*         name: Guest Name
*/
import express from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const guests = express.Router()

/**
 * @swagger
 * tags:
 *   name: Guests
 *   description: Nation APi
 * /Guests:
 *   get:
 *     summary: Pulls all Guests
 *     tags: [Guests]
 *     responses:
 *       200:
 *         description: The list of all Guests.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Guests'
 *       500:
 *         description: Some server error
 *
 */
guests.get('/', async (req, res) => {
    const posts = await prisma.guests.findMany()
    res.json(posts)
})

/**
 * @swagger
 * tags:
 *   name: Guests
 *   description: Nation API
 * /Guests:
 *   post:
 *     summary: Create a new Guests
 *     tags: [Guests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Guests'
 *     responses:
 *       200:
 *         description: The created guest.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Guests'
 *       500:
 *         description: Some server error
 *
 */
guests.post('/', async (req, res) => {
    const { guest_id, name } = req.body
    const post = await prisma.guests.create({
        data: {
            guest_id,
            name
        },
    })
    res.status(201).json(post)
})
export default guests;