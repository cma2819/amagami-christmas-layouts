import Browser from 'ts-nodecg/browser';
import Server from 'ts-nodecg/server';
import { ReplicantMap } from '../nodecg/replicants';
import { Configschema } from './generated';

export type ServerNodecgInstance = Server.CreateNodecgInstance<
	'amagami-christmas-layouts',
	Configschema,
	ReplicantMap,
	never
>;


export type BrowserNodecgInstance = Browser.CreateNodecgInstance<
	'amagami-christmas-layouts',
	Configschema,
	ReplicantMap,
	never,
>;

export type BrowserNodecgConstructor = Browser.CreateNodecgConstructor<
	'amagami-christmas-layouts',
	Configschema,
	ReplicantMap,
	never,
>;

export type Players = { 
    pk: string;
    name: string;
    target: null | ('ayatsuji' | 'sakurai' | 'tanamachi' | 'nakata' | 'nanasaki' | 'morishima');
}[];

export type Player = Players[number];