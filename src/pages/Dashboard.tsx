import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import KanbanBoard from '@/components/KanbanBoard';
import StatsCard from '@/components/StatsCard';
import { CheckCircle, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-slide-up">
            <StatsCard
              title="Total Tasks"
              value={24}
              change="+3 this week"
              changeType="positive"
              icon={CheckCircle}
            />
            <StatsCard
              title="In Progress"
              value={8}
              change="2 near deadline"
              changeType="neutral"
              icon={Clock}
              iconColor="text-status-in-progress"
            />
            <StatsCard
              title="Completed"
              value={12}
              change="+5 this week"
              changeType="positive"
              icon={TrendingUp}
              iconColor="text-status-done"
            />
            <StatsCard
              title="Blocked"
              value={2}
              change="Needs attention"
              changeType="negative"
              icon={AlertTriangle}
              iconColor="text-status-blocked"
            />
          </div>

          {/* Kanban Board */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-lg font-semibold text-foreground mb-4">Sprint Board</h2>
            <KanbanBoard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
