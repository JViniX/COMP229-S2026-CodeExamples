import app, { auth } from '../firebase';
import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const storage = getStorage(app);

// Utility function to sanitize file names
const sanitizeFileName = (fileName) => fileName.replace(/[^a-zA-Z0-9._-]+/g, '_');

// Utility function to ensure the user is signed in
const requireCurrentUser = () => {
    if (!auth.currentUser) {
        throw new Error('You must be signed in to upload images.');
    }

    return auth.currentUser;
};

// Uploads a project image to Firebase Storage and returns the download URL and storage path
const uploadProjectImage = async (file) => {
    if (!file) {
        throw new Error('No image file was selected.');
    }

    const currentUser = requireCurrentUser();
    const imagePath = `projects/${currentUser.uid}/${Date.now()}-${sanitizeFileName(file.name)}`;
    const imageRef = ref(storage, imagePath); // Create a reference to the storage location

    await uploadBytes(imageRef, file); // Upload the file to Firebase Storage

    const imageUrl = await getDownloadURL(imageRef); // Get the download URL for the uploaded image

    return { imageUrl, imagePath };
};

export { uploadProjectImage };