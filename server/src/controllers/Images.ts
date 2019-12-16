import { Request, Response } from 'express';
import os from 'os';
import path from 'path';
import fs from 'fs';

import { IMAGE_DIR } from '../middlewares/upload';
import { ImageStore, ImageSend, Image, Api } from '../lib';

/**
 * POST
 * Send the image in the request.
 *
 * @param request
 * @param response
 */
export const send = async (request: Request, response: Response) => {
  console.log(request.body);
  const image = request.body;
  const name = Image.generateName();
  try {
    const imageUrl = await ImageStore.save(name, image);
    if (typeof imageUrl === 'string') {
      ImageSend.send(imageUrl)
    }
    return response.json({ imageUrl });
  } catch (error) {
    console.error(`Error on putting s3 object: ${error}`);
    return Api.internalError(request, response, error);
  }
};

const getAllImagesInDirectory = () : string[] => {
  var fileNames: string[] = [];
  fs.readdir(IMAGE_DIR.concat('/'), (err, data) => {
    if (!err && data && data.length > 0) {
      data.forEach((fileName) => fileNames.push(fileName));
    }
  });

  return fileNames;
}