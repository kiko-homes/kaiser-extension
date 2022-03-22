import { getPageData } from 'single-file/src/single-file';

export const capturePage = async (): Promise<string> => {
  const { content } = await getPageData({
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

  return content;
};
