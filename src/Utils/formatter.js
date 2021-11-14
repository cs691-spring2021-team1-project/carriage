


export const cardFormatter = (name, cardNo, expDate, cvv, selected) => {
    return {
        name:name, 
        acctNo:cardNo, 
        ccv:cvv, 
        expDate: expDate,
        selected: selected,
    }
}