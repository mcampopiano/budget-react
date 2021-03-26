export const formatDate = date => {
    const [year, month, dayArr] = date.split("-")
    const day = dayArr.slice(0,2)
    return `${month}-${day}-${year}`
}

/* dates come from the server in the following format: "2021-03-01T14:51:39.989Z" 

This function takes that format as a parameter, uses array destructuring to split it up, then slices
the first two digits from the array, then returns the date in mm-dd-yyyy format*/