/**
 * Change types of all properties of I to the type T
 * interface A {
 *   prop1: number
 * }
 * type B = InterfaceChangedPropTypes<A, any>
 *   -> B = {prop1:any}
 */

export type InterfaceChangedPropTypes<I, T> = {
  [P in keyof I]: T;
};

/**
 * Filtered all properties with the type of 'Condition'.
 * e.g:
 * type A = FilteredOnType<{id:number, name: string}, string>
 * type A = {name:string}
 */
export type FilteredOnType<Base, Condition> = Pick<Base, {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
}[keyof Base]>;
/**
 * Filtered all properties without the type of 'Condition'.
 * e.g:
 * type A = FilteredOnType<{id:number, name: string}, string>
 * type A = {id:number}
 */
export type FilteredOnNotType<Base, Condition> = Pick<Base,
  {
    [Key in keyof Base]: Base[Key] extends Condition ? never : Key;
  }[keyof Base]>;
/**
 * Get all keys from properties with the type of 'Condition'.
 * e.g:
 * type A = ExtractFilteredOnTypeKeys<{id:number, firstName: string, secondName: string}, string>
 * type A = 'firstName' | 'secondName'
 */
export type ExtractFilteredOnTypeKeys<Base, Condition> = keyof FilteredOnType<Base,
  Condition>;
/**
 * Get all values from properties with the type of 'Condition'.
 * e.g:
 * type A = ExtractStringValues<{id:number, firstName: string, secondName: string}, string>
 * type A = string
 *
 * This type seems useless, but for Generic function it is be helpful
 */
export type FilteredOnTypeValues<T, P> = Extract<T[ExtractFilteredOnTypeKeys<T, P>],
  P>;
/**
 * FilterOnType-Types with specific type. Only useful for cleaner code.
 */
// boolean
export type ExtractBoolean<T> = FilteredOnType<T, boolean>;
export type ExtractBooleanKeys<T> = ExtractFilteredOnTypeKeys<T, boolean>;
export type ExtractBooleanValues<T> = FilteredOnTypeValues<T, boolean>;
// number
export type ExtractNumberKeys<T> = ExtractFilteredOnTypeKeys<T, number>;
export type ExtractNumberValues<T> = FilteredOnTypeValues<T, number>;

// string
export type ExtractString<T> = FilteredOnType<T, string>;
export type ExtractStringKeys<T> = ExtractFilteredOnTypeKeys<T, string>;
export type ExtractStringValues<T> = FilteredOnTypeValues<T, string>;
// Date
// ...

export type TypeOfArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType[number];

/**
 * The keys of properties with array type in an object
 *
 * Object: {
 *   prop1: [],
 *   prop2: 2,
 *   prop3: []
 * }
 * --> 'prop1','prop2'
 */
export type ExtractArrayKeysFromObject<Object,
  Key extends keyof Object> = FilteredOnType<Object[Key], Array<any>>;

/**
 * An array from a property in an object
 *
 * Object: {
 *   prop1: []
 *   prop1: []
 * }
 */
export type ExtractArrayValueFromObject<Object,
  ObjectKey extends keyof Object,
  Key extends keyof ExtractArrayKeysFromObject<Object, ObjectKey>> =
  ExtractArrayKeysFromObject<Object, ObjectKey>[Key]
  & Array<any>;

/**
 * Summarize the props of A and B, if there are the same key, the types will be union types.
 */
export type CommonProps<A, B> = {
  [K in keyof A & keyof B]: A[K] | B[K];
};

