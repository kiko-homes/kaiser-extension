import { Flex, Icon, Link, Select } from 'components/uikit';
import { CaptureButton } from './CaptureButton';
import { SavingButton } from './SavingButton';
import { useCaptureMenu } from './useCaptureMenu';
import { CircleIcon } from 'components/uikit/CircleIcon';
import { FiTv, FiX } from 'react-icons/fi';
import { LinkToApp } from 'components/LinkToApp';

export const CaptureMenu = () => {
  const { saving, capture, close, projects, selectedProject, selectProject } =
    useCaptureMenu();

  return (
    <>
      {saving ? <SavingButton flex='1' /> : <CaptureButton onClick={capture} />}
      {projects.length > 0 && (
        <Select
          variant='unstyled'
          maxWidth='200px'
          width='200px'
          border='none'
          value={selectedProject?.uid}
          iconColor={saving ? 'kaiser.gray50' : 'inherit'}
          textColor={saving ? 'kaiser.gray50' : 'inherit'}
          onChange={(e) => selectProject(e.target.value)}
        >
          {projects.map(({ name, uid }) => (
            <option key={uid} value={uid}>
              {name}
            </option>
          ))}
        </Select>
      )}
      {selectedProject && (
        <LinkToApp
          href={`/org/${selectedProject.organisationUid}/presentations/${selectedProject.uid}`}
        >
          <Flex
            alignItems='center'
            width='40px'
            mr='16px'
            color={saving ? 'kaiser.gray50' : 'primary.500'}
          >
            <Icon as={FiTv} mr='8px' transform='rotate(180deg)' />
            {selectedProject?.slidesCount ?? 0}
          </Flex>
        </LinkToApp>
      )}
      <Link onClick={close}>
        <CircleIcon icon={FiX} />
      </Link>
    </>
  );
};
