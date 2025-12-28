import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Search, Plus } from 'lucide-react';
import { mockUsers } from '@/data/mockData';

const Header = () => {
  const currentUser = mockUsers[0];

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">Project Board</h1>
        <div className="flex -space-x-2">
          {mockUsers.slice(0, 4).map((user) => (
            <Avatar key={user.id} className="h-8 w-8 border-2 border-background">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-xs">
                {user.name.split(' ').map((n) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          ))}
          <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-background bg-muted text-xs font-medium text-muted-foreground">
            +3
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
            className="w-64 pl-10 bg-secondary border-border"
          />
        </div>

        <Button variant="default" size="default" className="gap-2">
          <Plus className="w-4 h-4" />
          New Task
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
