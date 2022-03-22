import { useState } from 'react';

import { toggleCapturer } from '..';
import { saveHtml } from '../../data/actions/saveHtml';
import { usePorjects } from '../../data/store/projectsStore';
import { capturePage } from '../capture';

export const useCaptureMenu = () => {
  const [saving, setSaving] = useState(false);
  const projects = usePorjects();

  const capture = async () => {
    setSaving(true);

    const content = await capturePage();
    saveHtml('', content);

    setSaving(false);
  };

  const close = () => {
    toggleCapturer();
  };

  return { saving, capture, close, projects };
};
