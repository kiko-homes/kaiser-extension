import { useState } from 'react';
import { MessageType, Sender } from 'scripts/common/messages';

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
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    saveHtml({
      rawHtml: content,
      title,
      projectId: selectedProject?.uid,
      viewportHeight,
      viewportWidth,
    });

    setSaving(false);
  };

  const close = () => {
    chrome.runtime.sendMessage({
      from: Sender.CAPTURER_SCRIPT,
      type: MessageType.ON_CAPTURER_CLOSED,
    });
    toggleCapturer(false);
  };

  return { saving, capture, close, projects, selectedProject, selectProject };
};
