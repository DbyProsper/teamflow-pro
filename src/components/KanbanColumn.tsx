import { Task, TaskStatus } from '@/types/task';
import TaskCard from './TaskCard';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface KanbanColumnProps {
  id: TaskStatus;
  title: string;
  tasks: Task[];
  onDragStart: (e: React.DragEvent, taskId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, status: TaskStatus) => void;
  isDragOver: boolean;
}

const statusColors: Record<TaskStatus, string> = {
  todo: 'bg-status-todo',
  'in-progress': 'bg-status-in-progress',
  done: 'bg-status-done',
  blocked: 'bg-status-blocked',
};

const KanbanColumn = ({
  id,
  title,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
  isDragOver,
}: KanbanColumnProps) => {
  return (
    <div
      className={cn(
        'flex flex-col min-w-[320px] max-w-[320px] rounded-xl transition-all duration-200',
        isDragOver && 'ring-2 ring-primary/50'
      )}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, id)}
    >
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <div className={cn('w-2.5 h-2.5 rounded-full', statusColors[id])} />
          <h3 className="font-semibold text-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            {tasks.length}
          </span>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div
        className={cn(
          'flex-1 space-y-3 p-2 rounded-lg transition-colors min-h-[200px]',
          isDragOver && 'bg-primary/5'
        )}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDragStart={onDragStart} />
        ))}
        
        {tasks.length === 0 && (
          <div className="flex items-center justify-center h-32 border-2 border-dashed border-border rounded-lg text-muted-foreground text-sm">
            Drop tasks here
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
