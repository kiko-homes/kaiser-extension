import { Sender } from './sender';
import { MessageType } from './type';

export type ContentToBackgroundMessage = ContentToBackgroundPayload & {
  from: Sender.CAPTURER_SCRIPT;
};

type ContentToBackgroundPayload = SubscribeToData | SaveHtml | OnCapturerClosed;

export interface SubscribeToData {
  type: MessageType.SUBSCRIBE_TO_DATA;
}
export interface OnCapturerClosed {
  type: MessageType.ON_CAPTURER_CLOSED;
}

export interface SaveHtml {
  type: MessageType.SAVE_HTML;
  projectId?: string;
  title: string;
  html: string;
  viewportHeight: number;
  viewportWidth: number;
}
