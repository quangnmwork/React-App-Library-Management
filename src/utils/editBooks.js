async function editBook(id, uploadData) {
  const response = await fetch(
    `https://thefour123.herokuapp.com/v1/books/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(uploadData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = response.json();
  console.log(data);
}
export default editBook;
