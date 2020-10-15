import AsyncStorage from "@react-native-community/async-storage";

export const setItem = async (key, value) => {
  try {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("AsyncStorage#setItem error: " + error.message);
  }
};
export const getItem = async (key) => {
  let result = await AsyncStorage.getItem(key);
  if (result) {
    try {
      return JSON.parse(result);
    } catch (e) {
      console.error(
        "AsyncStorage#getItem error deserializing JSON for key: " + key,
        e.message
      );
    }
  }
  return result;
};

export const removeItem = async (key) => {
  return await AsyncStorage.removeItem(key);
};
