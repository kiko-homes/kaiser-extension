declare module 'single-file/src/single-file' {
  interface GetPageDataOptions {
    removeHiddenElements?: boolean;
    removeUnusedStyles?: boolean;
    removeUnusedFonts?: boolean;
    removeImports?: boolean;
    removeScripts?: boolean;
    compressHTML?: boolean;
    removeAudioSrc?: boolean;
    removeVideoSrc?: boolean;
    removeAlternativeFonts?: boolean;
    removeAlternativeMedias?: boolean;
    removeAlternativeImages?: boolean;
    groupDuplicateImages?: boolean;
    loadDeferredImages?: boolean;
  }

  interface PageData {
    content: string;
    title: string;
    fileName: string;
  }

  export async function getPageData(
    options: GetPageDataOptions,
  ): Promise<PageData>;
}
