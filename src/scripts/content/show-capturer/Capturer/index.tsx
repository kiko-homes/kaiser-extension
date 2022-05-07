import ReactDOM from 'react-dom';

import { Capturer } from './Capturer';

const CONTAINER_TAG = 'kaiser-root';

const createContainer = () => {
  const container = document.createElement('kaiser-root');

  document.body.after(container);

  return container;
};

const renderCapturer = () => {
  const container = createContainer();

  container.attachShadow({ mode: 'open' });

  if (!container.shadowRoot) return;

  ReactDOM.render(
    <Capturer rootEl={container.shadowRoot.host as HTMLElement} />,
    container.shadowRoot,
  );
};

const containerExists = (): boolean => {
  const container = document.getElementsByTagName(CONTAINER_TAG)[0];
  return !!container;
};

const toggleCapturerVisibility = (show: boolean) => {
  const container = document.getElementsByTagName(
    CONTAINER_TAG,
  )[0] as HTMLElement;

  if (!container) return;

  if (show) {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
};

export const toggleCapturer = (show: boolean) => {
  if (!containerExists()) renderCapturer();
  else toggleCapturerVisibility(show);
};
