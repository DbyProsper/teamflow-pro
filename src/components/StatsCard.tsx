import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
}

const StatsCard = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-primary',
}: StatsCardProps) => {
  return (
    <div className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-200 group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {change && (
            <p
              className={cn(
                'text-xs mt-1',
                changeType === 'positive' && 'text-status-done',
                changeType === 'negative' && 'text-destructive',
                changeType === 'neutral' && 'text-muted-foreground'
              )}
            >
              {change}
            </p>
          )}
        </div>
        <div className={cn('p-2.5 rounded-lg bg-primary/10', iconColor)}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
