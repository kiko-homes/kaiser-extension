import create from 'zustand/vanilla';
import createHook from 'zustand';
import { Project } from 'scripts/common/models/project';

const projects = create<{ projects: Project[] }>(() => ({
  projects: [],
}));

const { setState } = projects;

export const setProjects = (projects: Project[]) => setState({ projects });

export const usePorjects = createHook(projects);
