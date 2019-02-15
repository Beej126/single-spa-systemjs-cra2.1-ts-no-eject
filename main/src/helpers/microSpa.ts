//this is <script src'd> in main index.html, special module, doesn't import normally
declare var SystemJS: any;

export const runScript = async (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode!.insertBefore(script, firstScript);
  });
};

export const matchPath = (pathnames:string[]) =>
  (location: Location) =>
    pathnames.some(pathname => location.pathname === pathname);

//the actual module is hanging off ".default" property
export const remoteImport = async (url: string) => (await SystemJS.import(url)).default;