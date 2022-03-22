import { SaveHtml } from 'scripts/common/messages/contentToBackgroundMessages';

export const saveHtml = async (request: SaveHtml) => {
  console.log(request.html);
};
