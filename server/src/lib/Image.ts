export const generateName = (fileExtension = 'jpeg') : string => {
  return Math.floor(Date.now()).toString().concat('.').concat(fileExtension);
}
