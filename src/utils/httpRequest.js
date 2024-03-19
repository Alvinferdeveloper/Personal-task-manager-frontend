import AsyncStorage from "@react-native-async-storage/async-storage";

export class httpRequest {
  URL = "http://192.168.43.105:8080";
  DEFAULT_OPTIONS = {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
    },
  };

  async get(path) {
    const token = await AsyncStorage.getItem('token');
    return fetch(`${this.URL}/${path}`,{
        headers:{
        "Content-Type": "application/json",
        'Authorization': `${token}` 
        }
    });
  }

  post(path, data) {
    return fetch(`${this.URL}${path}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  delete(path) {
    return fetch(`${this.URL}/${path}`);
  }
}
