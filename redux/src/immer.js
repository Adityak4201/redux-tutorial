import { produce } from "immer";

let book = { title: "A story to be heard" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

book = publish(book);

console.log(book);
