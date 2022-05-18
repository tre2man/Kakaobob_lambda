import { getData, saveData } from "./firebase";

/**
 * @param collection : firebase의 1차분류
 * @param doc : firebase의 2차분류
 * @param data : 실제 저장할 json data
 * @returns 데이터 저장의 성공 유무
 */
export declare function saveData(
  collection: string,
  doc: string,
  data: JSON
): Promise<Boolean> {};

/**
 * @param collection : firebase의 1차분류
 * @param doc : firebase의 2차분류
 * @returns json 데이터 반환
 */
export declare function getData(
  collection: string,
  doc: string
): Promise<JSON> {};
