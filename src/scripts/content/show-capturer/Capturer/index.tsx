import ReactDOM from 'react-dom';

import { Capturer } from './Capturer';

const CONTAINER_TAG = 'kaiser-root';

const createContainer = () => {
  const container = document.createElement('kaiser-root');

  container.style.position = 'fixed';
  container.style.bottom = '16px';
  container.style.left = '16px';
  container.style.zIndex = '9999';

  document.body.appendChild(container);

  return container;
};

const renderCapturer = () => {
  const container = createContainer();

  container.attachShadow({ mode: 'open' });

  ReactDOM.render(
    <Capturer rootEl={container.shadowRoot as any} />,
    container.shadowRoot,
  );
};

const containerExists = (): boolean => {
  const container = document.getElementsByTagName(CONTAINER_TAG)[0];
  return !!container;
};

const toggleCapturerVisibility = () => {
  const container = document.getElementsByTagName(
    CONTAINER_TAG,
  )[0] as HTMLElement;

  if (!container) return;

  if (container.style.display === 'none') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
};

export const toggleCapturer = () => {
  if (!containerExists()) renderCapturer();
  else toggleCapturerVisibility();
};
