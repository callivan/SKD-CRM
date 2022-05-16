declare module "*.css" {
  const css: { [key: string]: string };
  export = css;
}

declare module "*.scss" {
  const scss: { [key: string]: string };
  export = scss;
}

declare module "*.sass" {
  const sass: { [key: string]: string };
  export = sass;
}
