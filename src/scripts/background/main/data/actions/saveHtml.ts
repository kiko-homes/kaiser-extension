import { SaveHtml } from 'scripts/common/messages/contentToBackgroundMessages';
import { createScreenshot } from './createScreenshot';

export const saveHtml = async (request: SaveHtml) => {
  console.log(request.html);
  const screenshot = await createScreenshot();

  console.log(screenshot);
};
