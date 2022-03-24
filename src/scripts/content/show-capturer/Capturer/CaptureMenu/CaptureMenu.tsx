import { useTranslation } from 'react-i18next';

import { Box, Link, Select, VerticalSeparator } from 'components/uikit';
import { CaptureButton } from './CaptureButton';
import { SavingButton } from './SavingButton';
import { useCaptureMenu } from './useCaptureMenu';

export const CaptureMenu = () => {
  const { saving, capture, close, projects, selectedProject, selectProject } =
    useCaptureMenu();

  const { t } = useTranslation();

  return (
    <>
      {saving ? <SavingButton flex='1' /> : <CaptureButton onClick={capture} />}
      {projects.length > 0 && (
        <Select
          variant='unstyled'
          maxWidth='160px'
          border='none'
          onChange={(e) => selectProject(e.target.value)}
        >
          {projects.map(({ name, uid }) => (
            <option key={uid} value={uid}>
              {name}
            </option>
          ))}
        </Select>
      )}
      <Box width='40px'>{selectedProject?.slidesCount}</Box>
      <VerticalSeparator />
      <Link onClick={close}>{t('done')}</Link>
    </>
  );
};
