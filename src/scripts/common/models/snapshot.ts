import { SnapshotVersion } from './snapshotVersion';

export interface Snapshot {
  uid: string;
  organisationUid: string;
  name: string;
  html: string;
  version: number;
  versions: SnapshotVersion[];
  thumbnail: string;
}
