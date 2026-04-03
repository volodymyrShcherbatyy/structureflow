import { create } from 'zustand';

type TreeViewState = {
  expandedNodeIds: Set<string>;

  isExpanded: (id: string) => boolean;
  toggleNode: (id: string) => void;

  expandPath: (ids: string[]) => void;
};

export const useTreeViewStore = create<TreeViewState>((set, get) => ({
  expandedNodeIds: new Set(),

  isExpanded: (id) => {
    return get().expandedNodeIds.has(id);
  },

  toggleNode: (id) => {
    const next = new Set(get().expandedNodeIds);

    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }

    set({ expandedNodeIds: next });
  },

  expandPath: (ids) => {
    set({ expandedNodeIds: new Set(ids) });
  },
}));