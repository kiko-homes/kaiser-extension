import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/uikit';
import { Spinner } from 'components/uikit/Spinner';

interface SavingButtonProps extends ComponentProps<typeof Button> {}

export const SavingButton = (props: SavingButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      {...props}
      disabled
      backgroundColor='kaiser.gray75'
      _hover={{ backgroundColor: 'kaiser.gray75' }}
    >
      <Spinner color='white' mr='8px' h='12px' w='12px' />
      {t('saving')}
    </Button>
  );
};
