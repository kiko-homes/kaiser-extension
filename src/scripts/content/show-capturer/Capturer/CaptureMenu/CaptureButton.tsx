import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../../../components/uikit';

interface CaptureButtonProps extends ComponentProps<typeof Button> {}

export const CaptureButton = (props: CaptureButtonProps) => {
  const { t } = useTranslation();
  return <Button {...props}>{t('capture')}</Button>;
};
