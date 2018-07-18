import { IDbConfig } from "psychopiggy";
import * as pool from "./pool";

export { default as setup } from "./setup";

export interface IFeedEntry {
  html: string;
}

export interface IFeed {
  items: IFeedEntry[];
}

export interface IDateLinkEntry {
  date: string;
  link: string;
  count: number;
}

export interface IDateLinks {
  items: IDateLinkEntry[];
}

export interface IPinnedEntry {
  html: string;
}

export interface IPinned {
  items: IPinnedEntry[];
}

export async function init(dbConfig: IDbConfig) {
  return {
    pool: await pool.init(dbConfig)
  };
}

export async function getFeed(username: string) {
  return {
    items: []
  } as IFeed;
}

export async function getDateLinks(username: string) {
  return { items: [] } as IDateLinks;
}

export async function getPinned(username: string) {
  return { items: [] } as IPinned;
}
