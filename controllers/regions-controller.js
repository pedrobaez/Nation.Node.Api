/**
* @swagger
* components:
*   schemas:
*     Regions:
*       type: object
*       required:
*         - region_id
*         - name
*         - continent_Id
*         - continents
*       properties:
*         id:
*           type: Int
*           description: Id of the region
*         name:
*           type: string
*           description: The name of the region
*         continent_Id:
*           type: Int
*           description: The continent Id
*       example:
*         region_id: 1
*         name: Region
*         continent_Id: 2
*/
import express from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const regions = express.Router()

/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: Nation APi
 * /Regions:
 *   get:
 *     summary: Pulls all Regions
 *     tags: [Regions]
 *     responses:
 *       200:
 *         description: The list of all Regions.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Regions'
 *       500:
 *         description: Some server error
 *
 */
regions.get('/', async (req, res) => {
    const posts = await prisma.regions.findMany({
        include: {continents: true }
    })
    res.json(posts)

})

export default regions