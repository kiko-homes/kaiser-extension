export const createScreenThumbnail = async () => {
  const originalSizeScreenshot = await captureScreen();
  const resizedScreenshot = await resizeImage(originalSizeScreenshot);

  return resizedScreenshot;
};

const RESIZED_WIDTH = 590;
const RESIZED_HEIGHT = 360;

// here we create a new image
const resizeImage = (dataURL: string) =>
  new Promise<Blob>((resolve) => {
    // create a canvas
    const canvas = new OffscreenCanvas(RESIZED_WIDTH, RESIZED_HEIGHT);
    // get the context of your canvas
    const context = canvas.getContext('2d');
    // create a new image object
    convertBase64ToBlob(dataURL)
      .then(createImageBitmap)
      .then((image) => {
        const imgWidth = image.width;
        const imgHeight = image.height;

        const croppedHeight = (imgWidth * RESIZED_HEIGHT) / RESIZED_WIDTH;

        const resultingHeight = Math.min(imgHeight, croppedHeight);
        // this is where you manipulate the screenshot (cropping)
        // parameter 1: source image (screenshot)
        // parameter 2: source image x coordinate
        // parameter 3: source image y coordinate
        // parameter 4: source image width
        // parameter 5: source image height
        // parameter 6: destination x coordinate
        // parameter 7: destination y coordinate
        // parameter 8: destination width
        // parameter 9: destination height
        context?.drawImage(
          image,
          0,
          0,
          imgWidth,
          resultingHeight,
          0,
          0,
          RESIZED_WIDTH,
          RESIZED_HEIGHT,
        );

        canvas.convertToBlob().then(resolve);
      });
  });

// calling the captureVisibleTab method takes a screenhot
const captureScreen = () =>
  new Promise<string>((resolve, reject) => {
    // you can have two image formats (jpeg and png)
    // for jpeg use { format: "jpeg", quality: 100 } (you can adjust the jpeg image quality from 0-100)
    // for png use { format: "png" }
    chrome.tabs.captureVisibleTab(
      { format: 'jpeg', quality: 100 },
      (dataUrl) => {
        // Browser was closed before capture
        if (!dataUrl) return reject('Browser screen closed');
        resolve(dataUrl);
      },
    );
  });

/**
 * Convert BASE64 to BLOB
 * @param base64Image Pass Base64 image data to convert into the BLOB
 */
const convertBase64ToBlob = async (base64Image: string) => {
  const base64Response = await fetch(base64Image);

  return base64Response.blob();
};
