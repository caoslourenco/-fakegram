import Photo from '../models/photoModel.js';

export const createPhoto = async (imageUrl, caption, theme) => {
  const newPhoto = new Photo({ imageUrl, caption, theme });
  await newPhoto.save();
  return newPhoto;
};

export const updateCaption = async (photoId, newCaption) => {
  return await Photo.findByIdAndUpdate(photoId, { caption: newCaption }, { new: true });
};
