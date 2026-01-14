export namespace Equal {
  export const notEqual = (a: string, b: string) => {
    if (a !== b) {
      return a;
    }

    return b;
  };

  export const isEqual = (a: string, b: string) => {
    if (a === b) {
      return a;
    }

    return b;
  };
}
