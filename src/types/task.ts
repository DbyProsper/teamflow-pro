export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'blocked';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee?: User;
  dueDate?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}
