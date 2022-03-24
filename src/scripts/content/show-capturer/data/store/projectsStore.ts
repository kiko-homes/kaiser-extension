import create from 'zustand/vanilla';
import createHook from 'zustand';
import { Project } from 'scripts/common/models/project';

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
      projects[0],
  });

export const useProjects = createHook(projects);
