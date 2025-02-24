import { ExtractNumberKeys, FilteredOnType } from "../types/util.ts";

// TODO falschherum
export function numberSort<Type>(array:Type[],key: ExtractNumberKeys<Type>, invert:boolean = false) {
  return array.sort((a: FilteredOnType<Type, number> , b: FilteredOnType<Type, number> ) => {
    return (a[key] as number) - (b[key] as number);
    if(invert) return (b[key] as number) - (a[key] as number);
  });
}