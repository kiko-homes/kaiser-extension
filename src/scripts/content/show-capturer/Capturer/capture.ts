export const capturePage = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { content, title } = await (globalThis as any).extension.getPageData({
    compressHTML: true,
    removeImports: true,
    removeHiddenElements: true,
    insertMetaCSP: true,
    removeFrames: false,
    blockMixedContent: false,
    saveOriginalURLs: false,
    includeInfobar: false,
    saveRawPage: false,

    removeUnusedStyles: true,
    removeAlternativeMedias: true,
    compressCSS: false,
    moveStylesInHead: false,

    groupDuplicateImages: true,
    loadDeferredImages: true,
    loadDeferredImagesMaxIdleTime: 1500,
    loadDeferredImagesKeepZoomLevel: false,
    removeAlternativeImages: true,

    removeUnusedFonts: true,
    removeAlternativeFonts: true,

    removeScripts: true,
    removeVideoSrc: true,
    removeAudioSrc: true,

    defaultEditorMode: 'normal',
    applySystemTheme: true,
    warnUnsavedPage: true,

    backgroundSave: true,
  });

  return { content, title };
};
