import { createPhoto, updateCaption } from '../services/photoService.js';
import { generateCaptionWithTheme } from '../services/geminiService.js';

export const createPhotoWithCaption = async (req, res) => {
  try {
    const { imageUrl, theme } = req.body;

    // Gera a legenda usando a IA do Gemini
    const caption = await generateCaptionWithTheme(imageUrl, theme);

    const photo = await createPhoto(imageUrl, caption, theme);
    res.status(201).json({ message: 'Photo uploaded successfully', photo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editCaption = async (req, res) => {
  try {
    const { photoId, newCaption } = req.body;
    const updatedPhoto = await updateCaption(photoId, newCaption);
    
    if (!updatedPhoto) {
      return res.status(404).json({ error: 'Photo not found' });
    }
    
    res.status(200).json({ message: 'Caption updated successfully', photo: updatedPhoto });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
