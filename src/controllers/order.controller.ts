import { Request, Response, NextFunction } from 'express';
import { Order } from '../models/Order';

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  const { userId, productId, quantity } = req.body;
  try {
    const order = await Order.create({ userId, productId, quantity });
    res.status(201).json({
      status: true,
      message: 'Order Created successfully',
      order,
    });
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json({
      status: true,
      message: 'Orders Fetch successfully',
      orders,
    });
  } catch (error) {
    next(error);
  }
};