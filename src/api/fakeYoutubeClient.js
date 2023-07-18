import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.realtedToVidoeId ? axios.get("/videos/realted.json") : axios.get("/videos/search.json");
  }

  async videos() {
    return axios.get("/videos/popular.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }
}
