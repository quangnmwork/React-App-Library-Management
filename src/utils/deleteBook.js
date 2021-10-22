async function deleteBook(id) {
  const response = await fetch(`https://thefour123.herokuapp.com/books/${id}`,
    {
      method:'DELETE',
    });
  const data = response.json();
  //console.log(data);
}
export default deleteBook;