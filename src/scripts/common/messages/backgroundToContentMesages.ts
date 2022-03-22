import { Project } from '../models/project';
import { Sender } from './sender';
import { MessageType } from './type';

export type BackgroundToContentMessage = BackgroundToContentPayload & {
  from: Sender.MAIN_EXTENSION;
};

type BackgroundToContentPayload =
  | ToggleCapturer
  | ExtensionData
  | LoggedInStatus;

export interface ToggleCapturer {
  type: MessageType.TOGGLE_CAPTURER;
}

export interface ExtensionData {
  type: MessageType.EXTENSION_DATA;
  projects: Project[];
}

export interface LoggedInStatus {
  type: MessageType.LOG_IN_STATUS;
  loggedIn: boolean;
}
