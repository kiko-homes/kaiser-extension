import { LinkToApp } from 'components/LinkToApp';
import { useTranslation } from 'react-i18next';

export const AuthMenu = () => {
  const { t } = useTranslation();

  return <LinkToApp href='/'>{t('login')}</LinkToApp>;
};
