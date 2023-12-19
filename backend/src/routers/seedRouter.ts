import express, { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import { ProductModel } from '../models/productModel'
import { sampleProducts } from '../../data'

const seedRouter = express.Router()

seedRouter.get(
  '/',
  expressAsyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleProducts)
    res.send({ createdProducts })
  })
)
export default seedRouter
