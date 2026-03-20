import { create } from 'zustand';

type ScopeLevel = {
  id: string;
  label: string;
};

type ScopeStore = {
  projectId: string | null;
  projectName: string;
  currentScopeId: string | null;
  scopeStack: ScopeLevel[];
  setProjectId: (projectId: string) => void;
  setProjectName: (projectName: string) => void;
  drillInto: (id: string, label: string) => void;
  drillOut: () => void;
  resetScope: () => void;
  jumpTo: (index: number) => void;
};

export const useScopeStore = create<ScopeStore>((set) => ({
  projectId: null,
  projectName: 'Project',
  currentScopeId: null,
  scopeStack: [],
  setProjectId: (projectId) => set({ projectId }),
  setProjectName: (projectName) => set({ projectName }),
  drillInto: (id, label) =>
    set((state) => ({
      currentScopeId: id,
      scopeStack: [...state.scopeStack, { id, label }],
    })),
  drillOut: () =>
    set((state) => {
      if (state.scopeStack.length === 0) {
        return state;
      }

      const nextScopeStack = state.scopeStack.slice(0, -1);

      return {
        currentScopeId: nextScopeStack.at(-1)?.id ?? null,
        scopeStack: nextScopeStack,
      };
    }),
  resetScope: () => set({ currentScopeId: null, scopeStack: [] }),
  jumpTo: (index) =>
    set((state) => {
      const nextScopeStack = state.scopeStack.slice(0, index + 1);

      return {
        currentScopeId: nextScopeStack.at(-1)?.id ?? null,
        scopeStack: nextScopeStack,
      };
    }),
}));
