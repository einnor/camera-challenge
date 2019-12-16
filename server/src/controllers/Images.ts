import { Request, Response } from 'express';

import { ImageStore, ImageSend, Api, Image } from '../lib';

/**
 * POST
 * Send the image in the request.
 *
 * @param request
 * @param response
 */
export const send = async (request: Request, response: Response) => {
  const { image } = request.body;
  if (!image) {
    return Api.badRequest(request, response, { error: 'Image is missing in the body' });
  }
  try {
    const imageName = Image.generateName();
    const imageUrl = await ImageStore.save(imageName, image);
    if (typeof imageUrl === 'string') {
      ImageSend.send(imageUrl)
    }
    return response.json({ imageUrl });
  } catch (error) {
    console.error(`Error on putting s3 object: ${error}`);
    return Api.internalError(request, response, error);
  }
};
