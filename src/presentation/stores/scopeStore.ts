import { create } from 'zustand';

type ScopeStore = {
  projectId: string | null;
  setProjectId: (projectId: string) => void;
};

export const useScopeStore = create<ScopeStore>((set) => ({
  projectId: null,
  setProjectId: (projectId) => set({ projectId }),
}));
