import create from 'zustand/vanilla';
import createHook from 'zustand';
import { Project } from 'scripts/common/models/project';
import { findMostRecent } from 'scripts/utils/helpers';

const projects = create<{
  projects: Project[];
  selectedProject?: Project;
  selectProject: (selectedUid: string) => void;
}>((set, get) => ({
  projects: [],
  selectedProject: undefined,
  selectProject: (selectedUid: string) => {
    const selectedProject = get().projects.find(
      ({ uid }) => uid === selectedUid,
    );
    set({ selectedProject });
  },
}));

const { setState, getState } = projects;

export const setProjects = (projects: Project[]) =>
  setState({
    projects,
    selectedProject:
      projects.find(({ uid }) => uid === getState().selectedProject?.uid) ??
      findMostRecent(projects),
  });

export const useProjects = createHook(projects);
