import { Task, TaskStatus } from "@/app/_layout";
import InLineAddTask from "@/components/molecules/inLineAddTask";
import SearchContainer from "@/components/molecules/searchBar";
import TabBar from "@/components/molecules/tabBar";
import TaskItem from "@/components/organisms/taskItem";
import { globalStyles } from "@/styles";
import { FlatList, Text, View } from "react-native";

type TrackerScreenProps = {
  activeTab: TaskStatus;
  tabCount: {
    todoCount: number;
    laterCount: number;
    doneCount: number;
  };
  setActiveTab: (tab: TaskStatus) => void;

  search: string;
  setSearch: (text: string) => void;

  newTitle: string;
  setNewTitle: (text: string) => void;
  handleInlineSubmit: () => void;

  filteredTasks: Task[];

  deleteTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
  updateTasks: (id: string, status: TaskStatus) => void;
};

export default function TrackerScreen({
  activeTab,
  tabCount,
  setActiveTab,
  search,
  setSearch,
  newTitle,
  setNewTitle,
  handleInlineSubmit,
  filteredTasks,
  deleteTask,
  editTask,
  updateTasks,
}: TrackerScreenProps) {
  return (
    <View style={globalStyles.container}>
      <TabBar
        activeTab={activeTab}
        tabCount={tabCount}
        setActiveTab={setActiveTab}
      />
      <SearchContainer search={search} setSearch={setSearch} />
      <InLineAddTask
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        handleInlineSubmit={handleInlineSubmit}
      />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            id={item.id}
            task_status={item.task_status}
            deleteTask={deleteTask}
            editTask={editTask}
            updateTask={updateTasks}
          />
        )}
        ListEmptyComponent={
          <View style={globalStyles.emptyContainer}>
            <Text style={globalStyles.emptyText}>No tasks found!</Text>
          </View>
        }
      />
    </View>
  );
}
