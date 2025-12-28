import { useState } from 'react';
import { Task, TaskStatus } from '@/types/task';
import { mockTasks } from '@/data/mockData';
import KanbanColumn from './KanbanColumn';

const columns: { id: TaskStatus; title: string }[] = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
  { id: 'blocked', title: 'Blocked' },
];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<TaskStatus | null>(null);

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTask(taskId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, columnId: TaskStatus) => {
    e.preventDefault();
    setDragOverColumn(columnId);
  };

  const handleDrop = (e: React.DragEvent, status: TaskStatus) => {
    e.preventDefault();
    if (draggedTask) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === draggedTask ? { ...task, status, updatedAt: new Date().toISOString() } : task
        )
      );
    }
    setDraggedTask(null);
    setDragOverColumn(null);
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
    setDragOverColumn(null);
  };

  const getTasksByStatus = (status: TaskStatus) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div
      className="flex gap-6 overflow-x-auto pb-4 px-1"
      onDragEnd={handleDragEnd}
    >
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          id={column.id}
          title={column.title}
          tasks={getTasksByStatus(column.id)}
          onDragStart={handleDragStart}
          onDragOver={(e) => handleDragOver(e, column.id)}
          onDrop={handleDrop}
          isDragOver={dragOverColumn === column.id}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
