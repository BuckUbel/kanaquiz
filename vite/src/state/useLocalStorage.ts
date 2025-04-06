import {LocalStorageKeys} from "./constants.ts";

const DEFAULT_LOCALSTORAGE_KEYS = new LocalStorageKeys();

export const useLocalStorage = <T extends keyof LocalStorageKeys>
(key: T, newDefaultData?: LocalStorageKeys[T]) => {
  type DATATYPE = LocalStorageKeys[T];

  let defaultData = DEFAULT_LOCALSTORAGE_KEYS[key];
  if(newDefaultData) defaultData = newDefaultData;

  const serData = localStorage.getItem(key);
  if (!serData) localStorage.setItem(key, JSON.stringify(defaultData));
  const getData = (): DATATYPE => {
    const serData = localStorage.getItem(key);
    if (!serData) return defaultData;
    return JSON.parse(serData);
  };
  const setData = (data: DATATYPE) => {
    const newSerData = JSON.stringify(data);
    localStorage.setItem(key, newSerData);
  };
  const getItem = (index: number): DATATYPE | undefined => {
    const serDataString = localStorage.getItem(key);
    if (!serDataString) return undefined;
    const serData = JSON.parse(serDataString);
    if (!serData[index]) return undefined;
    return serData[index];
  };
  const setItem = (index: number, data: DATATYPE) => {
    const serDataString = localStorage.getItem(key);
    if (!serDataString) localStorage.setItem(key, '[]');
    const serData = JSON.parse(localStorage.getItem(key) as string);
    serData[index] = data;
    const newSerData = JSON.stringify(serData);
    localStorage.setItem(key, newSerData);
  };

  return {getData, setData, getItem, setItem};

};
