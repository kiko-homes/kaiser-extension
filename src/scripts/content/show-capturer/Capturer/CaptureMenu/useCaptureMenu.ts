import { useState } from 'react';

import { toggleCapturer } from '..';
import { saveHtml } from '../../data/actions/saveHtml';
import { useProjects } from '../../data/store/projectsStore';
import { capturePage } from '../capture';

export const useCaptureMenu = () => {
  const [saving, setSaving] = useState(false);
  const { projects, selectedProject, selectProject } = useProjects();

  const capture = async () => {
    setSaving(true);

    const { content, title } = await capturePage();
    saveHtml(content, title, selectedProject?.uid);

    setSaving(false);
  };

  const close = () => {
    toggleCapturer();
  };

  return { saving, capture, close, projects, selectedProject, selectProject };
};
