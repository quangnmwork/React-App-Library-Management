

async function addBook(book) {
    const response = await fetch('https://thefour123.herokuapp.com/books',
      {
        method:'POST',
        body:JSON.stringify(book),
        headers:{
          'Content-type':'application/json'
        }
      });
    const data = response.json();
    console.log(data);
  }
  export default addBook;