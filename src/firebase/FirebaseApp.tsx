import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase-config";
export interface FirebaseAppProps {}

export default function FirebaseApp(props: FirebaseAppProps) {
  // colRef
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  console.log("Firebase", colRef);

  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      console.log("getDoc: ", snapshot);
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("error");
      });
  }
  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("success");
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);
    await updateDoc(colRefUpdate, {
      title: "this is new",
    });
    console.log("success");
  };

  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          name="author"
          placeholder="Author"
        />
        <button>submit</button>
      </form>

      <form onClick={handleDelete}>
        <input
          type="text"
          onChange={(e) => setPostId(e.target.value)}
          name="postId"
          placeholder="postId"
        />
        <button>Delete</button>
      </form>

      <form onClick={handleUpdate}>
        <input
          type="text"
          onChange={(e) => setPostId(e.target.value)}
          name="postId"
          placeholder="postId"
        />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="title"
        />
        <button>Update</button>
      </form>
    </div>
  );
}
