import { Request, Response, NextFunction } from 'express';
import { Product } from '../models/Product';
import { PassThrough } from 'stream';

export const getProducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: true,
      message: 'Product List fetched successfully',
      products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({
      status: true,
      message: 'Product fetched successfully',
      product,
    });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, price, quantity } = req.body;
    const product = await Product.create({ name, description, price, quantity });
    res.status(201).json({
      status: true,
      message: 'Product added successfully',
      product,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, description, price, quantity } = req.body;
    await product.update({ name, description, price, quantity });
    res.status(201).json({
      status: true,
      message: 'Product updated successfully',
      product,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.destroy();
    res.status(200).json({
      status: true,
      message: 'Product deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};