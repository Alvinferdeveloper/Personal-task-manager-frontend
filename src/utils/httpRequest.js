import AsyncStorage from "@react-native-async-storage/async-storage";

export class httpRequest {
  URL = "http://192.168.75.105:8080";
  DEFAULT_OPTIONS = {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
    },
  };

  async get(path) {
    const token = await AsyncStorage.getItem("token");
    return fetch(`${this.URL}/${path}`,{
        headers:{
        "Content-Type": "application/json",
        'Authorization': `${token}` 
        }
    });
  }

  async post(path, data) {
    const token = await AsyncStorage.getItem("token");
    console.log(data)
    return fetch(`${this.URL}${path}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `${token}` 
      },
      body: JSON.stringify(data),
    });
  }

  async delete(path) {
    const token = await AsyncStorage.getItem("token");
    return fetch(`${this.URL}${path}`,{
      method:"DELETE",
      headers:{
        "content-type": "application/json",
        Authorization: `${token}` 
      }
    });
  }

  async patch(path){
    const token = await AsyncStorage.getItem("token");
    return fetch(`${this.URL}${path}`,{
      method:"PATCH",
      headers:{
        "content-type": "application/json",
        Authorization: `${token}` 
      }
    });
  }
}
