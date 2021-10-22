const convertDataToBook = (bookName , author , bookID , imgURL,available,category,descript,starts,numberPages) => {
    const uploadData = {
        "bookId": bookID,
        "bookName": bookName,
        "author": author,
        "img": imgURL,
        "available": available,
        "category": category,
        "description": descript,
        "star": starts,
        "numberOfPages": numberPages
    }
    return uploadData;
};
export default convertDataToBook;