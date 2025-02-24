import { ClassInterface } from "../types/default.ts";

export function deepCopy<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}

export function getMultipleFromClass<ClassObj extends {}, ConstructorProps extends any[] = any[]>(Class: ClassInterface<ClassObj, ConstructorProps>, count: number, constructorProps: ConstructorProps) {
  const arr: ClassObj[] = [];
  for (let i = 0; i < count; i++) {
    arr[i] = new Class(...constructorProps);
  }
  return arr;
}

export function changeValueInObjectArray<D, T extends Partial<D>[] = Partial<D>[]>(arr: T, index: number, newObject: Partial<D>): T {
  return [
    ...arr.slice(0, index),
    {
      ...arr[index],
      ...newObject
    },
    ...arr.slice(index + 1, arr.length)
  ] as T;
}

export function sliceArray<T>(arr: T[], index: number): T[] {
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1, arr.length)
  ] as T[];
}

export function groupElements<T>(array: T[], maxCount: number = 1) {
  const groupedArrays: T[][] = [];
  for (let i = 0; i < array.length; i += maxCount) {
    groupedArrays.push(array.slice(i, i + maxCount));
  }
  return groupedArrays;
}

export function containsLowerCased(search: string, arr: string[]) {
  let result = false;
  arr.forEach(str => {
    if (!result) result = search.toLowerCase().includes(str.toLowerCase());
  })
  return result;
}

export function base64Encode(text: string) {
  const bytes = new TextEncoder().encode(text);
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte)).join("");
  return btoa(binString)
}

export function base64Decode(encryptedText: string) {
  const binString = atob(encryptedText);
  const bytes = Uint8Array.from(binString, (m:string):any => m.codePointAt(0));
  // const bytes= Uint8Array.from(binString,(m)=>m.codePointAt(0));
  return new TextDecoder().decode(bytes);
}
