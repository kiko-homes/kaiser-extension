import {
  collection,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  where,
} from 'firebase/firestore';
import { Project, ProjectFull } from 'scripts/common/models/project';
import { db } from '../../utils/firebase/firebase';

export const subscribeToOrganisationProjects = (
  organisationUid: string,
  callback: (projects: Project[]) => void,
) =>
  onSnapshot(
    query(
      collection(db, 'projects'),
      where('organisationUid', '==', organisationUid),
    ),
    async (fullProjects) => {
      const projects = await Promise.all(fullProjects.docs.map(getProjectData));

      callback(projects);
    },
  );

const getProjectData = async (fullProject: QueryDocumentSnapshot) => {
  const uid = fullProject.id;
  const { name, slidesCount, updatedAt } = fullProject.data() as ProjectFull;

  return { name, uid, slidesCount, updatedAt } as Project;
};
