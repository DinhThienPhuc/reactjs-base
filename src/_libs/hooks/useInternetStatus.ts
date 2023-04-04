import { useEffectOnce } from "./useEffectOnce";

export const useInternetStatus = (
  onlineCallback: () => void,
  offlineCallback: () => void,
) => {
  useEffectOnce(() => {
    window.addEventListener("online", onlineCallback);
    window.addEventListener("offline", offlineCallback);

    return () => {
      window.removeEventListener("online", onlineCallback);
      window.removeEventListener("offline", offlineCallback);
    };
  });
};
