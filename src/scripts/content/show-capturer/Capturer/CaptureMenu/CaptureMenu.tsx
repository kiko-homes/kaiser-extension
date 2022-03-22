import { useTranslation } from 'react-i18next';

import { Link } from '../../../../../components/uikit';
import { CaptureButton } from './CaptureButton';
import { SavingButton } from './SavingButton';
import { useCaptureMenu } from './useCaptureMenu';

export const CaptureMenu = () => {
  const { saving, capture, close } = useCaptureMenu();

  const { t } = useTranslation();

  return (
    <>
      {saving ? <SavingButton /> : <CaptureButton onClick={capture} />}
      <Link onClick={close}>{t('done')}</Link>
    </>
  );
};
