import AsyncStorage from '@react-native-community/async-storage';

export default (key) => ({
    load() {
        return AsyncStorage.getItem(key)
            .then((jsonState) => JSON.parse(jsonState) || {});
    },

    save(state) {
        const jsonState = JSON.stringify(state);
        return AsyncStorage.setItem(key, jsonState);
    }
});
