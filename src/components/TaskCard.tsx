import { Task, TaskPriority, TaskStatus } from '@/types/task';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Flag, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskCardProps {
  task: Task;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
}

const priorityConfig: Record<TaskPriority, { color: string; label: string }> = {
  low: { color: 'bg-muted text-muted-foreground', label: 'Low' },
  medium: { color: 'bg-status-in-progress/20 text-status-in-progress', label: 'Medium' },
  high: { color: 'bg-primary/20 text-primary', label: 'High' },
  urgent: { color: 'bg-destructive/20 text-destructive', label: 'Urgent' },
};

const TaskCard = ({ task, onDragStart }: TaskCardProps) => {
  const priority = priorityConfig[task.priority];

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      className="group glass rounded-lg p-4 cursor-grab active:cursor-grabbing hover:border-primary/30 transition-all duration-200 hover:shadow-lg animate-fade-in"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
          {task.title}
        </h4>
        <Badge variant="secondary" className={cn('text-xs', priority.color)}>
          <Flag className="w-3 h-3 mr-1" />
          {priority.label}
        </Badge>
      </div>

      {task.description && (
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {task.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border/50">
        <div className="flex items-center gap-2">
          {task.assignee && (
            <Avatar className="h-6 w-6">
              <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
              <AvatarFallback className="text-xs">
                {task.assignee.name.split(' ').map((n) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          )}
        </div>

        <div className="flex items-center gap-3 text-muted-foreground">
          {task.dueDate && (
            <span className="flex items-center gap-1 text-xs">
              <Calendar className="w-3 h-3" />
              {new Date(task.dueDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
