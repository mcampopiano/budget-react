export const formatDate = date => {
    const [year, month, dayArr] = date.split("-")
    const day = dayArr.slice(0,2)
    return `${month}-${day}-${year}`
}