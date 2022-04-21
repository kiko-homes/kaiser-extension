import { Timestamp } from 'firebase/firestore';

export interface Project {
  uid: string;
  name: string;
  slidesCount: number;
  updatedAt: Timestamp;
}

export interface ProjectFull {
  name: string;
  organisationUid: string;
  thumbnail: string;
  slidesCount: number;
  updatedAt: Timestamp;
}
