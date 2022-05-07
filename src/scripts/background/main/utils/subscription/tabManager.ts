const createTabManager = () => {
  const activeTabs: Set<number> = new Set();

  const isActive = (tabId: number) => {
    return activeTabs.has(tabId);
  };

  const toggleActive = (tabId: number) => {
    const active = isActive(tabId);
    if (active) activeTabs.delete(tabId);
    else activeTabs.add(tabId);

    return active;
  };

  return {
    isActive,
    toggleActive,
  };
};

export const tabManager = createTabManager();
