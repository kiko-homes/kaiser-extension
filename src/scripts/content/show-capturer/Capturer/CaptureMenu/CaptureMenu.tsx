import { Flex, Icon, Link, Select } from 'components/uikit';
import { CaptureButton } from './CaptureButton';
import { SavingButton } from './SavingButton';
import { useCaptureMenu } from './useCaptureMenu';
import { CircleIcon } from 'components/uikit/CircleIcon';
import { FiTv, FiX } from 'react-icons/fi';

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
      <Flex
        alignItems='center'
        width='40px'
        mr='16px'
        color={saving ? 'kaiser.gray50' : 'primary.500'}
      >
        <Icon as={FiTv} mr='8px' transform='rotate(180deg)' />
        {selectedProject?.slidesCount}
      </Flex>
      <Link onClick={close}>
        <CircleIcon icon={FiX} />
      </Link>
    </>
  );
};
