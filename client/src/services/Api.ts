import axios from '../plugins/axios';


export default class Api {
  static sendCapturedImage = async (image: string) => {
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios({
      url: 'images',
      method: 'POST',
      data:formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    return response;
  };
}