import { HeroineOverwrite, Loves } from './generated';
import { Scene } from './generated/scene';

type Asset = {
  base: string;
  bundleName: string;
  category: string;
  ext: string;
  name: string;
  sum: string;
  url: string;
}

type Assets = Array<Asset>;

type ReplicantMap = {
  'assets:stands': Assets,
  'assets:icons': Assets,
  scene: Scene,
  'heroine-overwrite': HeroineOverwrite,
  loves: Loves,
}

export {
  Asset,
  Assets,
  ReplicantMap,
  Scene,
  HeroineOverwrite,
  Loves,
};
