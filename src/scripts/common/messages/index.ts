import { BackgroundToContentMessage } from './backgroundToContentMesages';
import { ContentToBackgroundMessage } from './contentToBackgroundMessages';

export * from './sender';
export * from './type';

export type ChromeMessage =
  | BackgroundToContentMessage
  | ContentToBackgroundMessage;

export type Respond = (response?: any) => void;
