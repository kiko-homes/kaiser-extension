import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../../../components/uikit';

interface SavingButtonProps extends ComponentProps<typeof Button> {}

export const SavingButton = (props: SavingButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button {...props} disabled>
      {t('saving')}
    </Button>
  );
};
