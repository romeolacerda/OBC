const Author = require("./Author")

const jhon = new Author("Jhon Doe")

const post = jhon.writePost("Titulo do post", "lorem lorem lorem")

post.addComment("Romeo", "Muiro Bom!")
post.addComment("Isaac", "Muiro Bom!")


console.log(jhon);
console.log(post) 