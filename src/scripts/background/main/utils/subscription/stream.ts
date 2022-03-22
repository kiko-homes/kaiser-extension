export const createStream = <M>(
  sendMessage: (
    subscriber: number,
    message: M,
    callback?: (subscriber: number) => void,
  ) => void,
) => {
  const subscribers = new Set<number>();

  const subscribe = (tabId: number) => {
    subscribers.add(tabId);

    return () => subscribers.delete(tabId);
  };

  const publish = (message: M, callback?: (subscriber: number) => void) => {
    subscribers.forEach((subscriber) =>
      sendMessage(subscriber, message, callback),
    );
  };

  return {
    subscribe,
    publish,
  };
};
