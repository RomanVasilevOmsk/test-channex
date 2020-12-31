const Storage = window.localStorage;

class StorageService {
  getItem = key => {
    const item = Storage.getItem(key);
    return item;
  };
  setItem = (key, value) => {
    Storage.setItem(key, value.toString());
  };
  removeItem = key => {
    Storage.removeItem(key);
  };
  getAccessToken = () => {
    const accessToken = this.getItem('accessToken');
    return accessToken;
  };
}

export default new StorageService();
