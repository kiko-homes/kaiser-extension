export const capturePage = async () => {
  const { content, title } = await (globalThis as any).extension.getPageData({
    removeHiddenElements: true,
    removeUnusedStyles: true,
    removeUnusedFonts: true,
    removeImports: true,
    removeScripts: true,
    compressHTML: true,
    removeAudioSrc: true,
    removeVideoSrc: true,
    removeAlternativeFonts: true,
    removeAlternativeMedias: true,
    removeAlternativeImages: true,
    groupDuplicateImages: true,
  });

  return { content, title };
};
