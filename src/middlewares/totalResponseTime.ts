import { Request, Response, NextFunction } from 'express';

export const totalResponseTime = (req: Request, res: Response, next: NextFunction) => {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.log(`[INFO] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${elapsedMs.toFixed(2)} ms`);
  });

  next();
};