type Todo = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  status: "all" | "completed";
  category: {
    id: string;
    name: string;
    color: string;
  }[];
  isCompleted: boolean;
};
