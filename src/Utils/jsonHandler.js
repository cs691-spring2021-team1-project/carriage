import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCards = async (key) => {
    let cardsJson
    try {
        cardsJson = await AsyncStorage.getItem(key)
    } catch (error) {
        console.log(error)
        return []
    }
    if (!cardsJson) {
        return []
    }
    return JSON.parse(cardsJson);
        
}

export const addCard = (cardData) => {
    return AsyncStorage.setItem('creditCard', JSON.stringify(cardData))
        .then(json => console.log(json))
        .catch(error => console.error("getCards Error", error));
}

export const appendCards = async (card, key) => {
    const cardData = await getCards(key)

    if (!cardData) {
        addCard([card])
        return
    }

    cardData.push(card)
    addCard(cardData)
}

// to remove card from AsyncStorage
export const deleteCardAt = async (index, key) => {
    const cardData = await getCards(key)

    if (!cardData) {
        // Nothing to Clear
        return
    }

    addCard(cardData.splice(index,1))
}

// to remove card from AsyncStorage
export const updateCardAt = async (card, index, key) => {
    const cardData = await getCards(key)

    if (!cardData) {
        // Nothing to Update
        return
    }
    try {
        cardData[index] = card
    } catch(error) {
        console.error("Couldn't Edit Card", error)
        return
    }

    addCard(cardData)
}

export const clearCards = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log("Cards Cannot be Cleared", error)
    }
}