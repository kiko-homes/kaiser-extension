interface PingMessage {
  type: 'ping';
}

interface AuthMessage {
  type: 'auth';
  token: string;
}

interface LogoutMessage {
  type: 'logout';
}

export type ExternalMessage = PingMessage | AuthMessage | LogoutMessage;
