import { createContext, useContext } from "react";
import Youtube from "./../api/youtube";
import YoutubeClient from "../api/youtubeClient";
import FakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const client = new FakeYoutubeClient(); // new YoutubeClient()
  const youtube = new Youtube(client);

  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
