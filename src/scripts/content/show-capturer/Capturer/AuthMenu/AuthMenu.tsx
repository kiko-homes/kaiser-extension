import { LinkToApp } from 'components/LinkToApp';
import { useTranslation } from 'react-i18next';

export const AuthMenu = () => {
  const { t } = useTranslation();

  return <LinkToApp href='/authenticate-extension'>{t('login')}</LinkToApp>;
};
