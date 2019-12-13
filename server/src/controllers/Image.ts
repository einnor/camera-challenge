import { Request, Response } from 'express';

import { ImageStore, Image } from '../lib';

/**
 * POST
 * Send the image in the request.
 *
 * @param request
 * @param response
 */
export const send = async (request: Request, response: Response) => {
  const image = request.body;
  const name = Image.generateName();

  try {
    const imageUrl = await ImageStore.save(name, image)
    return response.json({ imageUrl });
  } catch (err) {
    console.error(`Error on putting s3 object: ${err}`);
    return response.status(500).json({});
  }
};