export function throwIfAlreadyLoaded(
  parentModule: any,
  moduleName: string,
): any {
  if (parentModule) {
    throw new Error(
      `${moduleName} is already loaded. Import the "core" module in the AppModule only.`,
    );
  }
}
