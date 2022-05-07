import { Timestamp } from 'firebase/firestore';

export const findMostRecent = <T extends { updatedAt: Timestamp }>(
  collection: T[],
): T => {
  let resultIndex = 0;
  const resultEpochSeconds = 0;

  collection.forEach(({ updatedAt }, index) => {
    const epochSeconds = updatedAt.seconds;
    if (epochSeconds > resultEpochSeconds) {
      resultIndex = index;
    }
  });

  return collection[resultIndex];
};
