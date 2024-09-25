import Image from "next/image";
import { getTodos } from "./actions/actions";
import SearchBar from "./ui/search-bar";
import FilterSelect from "./ui/filter-list";
import TodoCard from "./ui/todo-card";
import PlusIcon from "../../../public/assets/svgs/add-icon.svg";
import HomeIcon from "../../../public/assets/svgs/home-icon.svg";
import ProfileIcon from "../../../public/assets/svgs/user.svg";
import CalendarIcon from "../../../public/assets/svgs/calendar.svg";

export default async function TaskListScreen({
  searchParams,
}: {
  searchParams: { search?: string; filter?: string };
}) {
  const { search, filter } = searchParams;
  const todos = await getTodos();

  const filteredTodos = todos
    .filter(
      (todo) =>
        !search || todo.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (todo) =>
        !filter || filter === "all" || (filter === "completed" && todo.status)
    );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4 overflow-y-auto">
        <SearchBar />
        <div className="flex justify-between items-center mb-4">
          <FilterSelect />
          <button className="text-purple-500">
            <Image src={CalendarIcon} alt="Calendar" width={24} height={24} />
          </button>
        </div>
        <div className="space-y-4 mb-20">
          {filteredTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
      <nav className="flex justify-around items-center bg-gray-900 p-4 fixed bottom-0 left-0 right-0">
        <button className="text-purple-500">
          <Image src={HomeIcon} alt="Home" width={24} height={24} />
        </button>
        <button className="bg-purple-500 p-3 rounded-full -mt-8">
          <Image src={PlusIcon} alt="Add" width={24} height={24} />
        </button>
        <button>
          <Image src={ProfileIcon} alt="Profile" width={24} height={24} />
        </button>
      </nav>
    </div>
  );
}
