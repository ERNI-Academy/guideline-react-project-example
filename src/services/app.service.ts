import axios from "axios";
import {parseFromApiToBrastlewark} from "../shared/models";

class AppService {
  getGlobalData = async ({url}: {url: string}) => {
    try {
      const response = await axios.get(url);
      return parseFromApiToBrastlewark(response?.data);
    } catch (error) {
      alert(error)
    }
  }
}

export default AppService;