import { db } from "@/firebase/config";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { revalidatePath } from "next/cache";
// Fetch all todos
export const getTodos = async (): Promise<Todo[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));

    return querySnapshot.docs.map((doc) => {
      const data = doc.data() as Partial<Todo>;
      console.log(data);
      return {
        id: doc.id,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        time: data.time || "",
        status: data.status || "",
        category: data.category || [],
        isCompleted: data.isCompleted || false,
      } as Todo;
    });
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Re-throw the error to propagate it up the call stack
  }
};

// Create a new todo
export const createTodo = async (todo: Todo) => {
  try {
    await addDoc(collection(db, "tasks"), todo);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Update an existing to-do
export const updateTodo = async (id: string, updatedTodo: Todo) => {
  try {
    const todoDoc = doc(db, "tasks", id);
    await updateDoc(todoDoc, updatedTodo);
  } catch (error) {
    console.log("An error occured", error);
  }
};

// Delete a todo
export const deleteTodo = async (id: string) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
    revalidatePath("/todos");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};
