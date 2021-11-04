


export const cardFormatter = (name, cardNo, expDate, cvv) => {
    return {
        name:name, 
        acctNo:cardNo, 
        ccv:cvv, 
        expDate:expDate,
        selected: false,
    }
}