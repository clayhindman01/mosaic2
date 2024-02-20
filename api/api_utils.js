import axios from "axios"
import { Platform } from "react-native"

const base_url = Platform.OS === "ios"? "http://10.0.0.68:3000/api/v1/mosaic": "http://10.0.2.2:3000/api/v1/mosaic"

export const searchUser = (username, setSearchResults) => {
  if (username === "") {
    setSearchResults(undefined)
    return
  }
  axios.get(base_url + `/users/${username}`)
    .then((response) => {
      console.log("res",response.data)
      setSearchResults(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}