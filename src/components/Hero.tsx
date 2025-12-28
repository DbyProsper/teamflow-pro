import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: CheckCircle, text: 'Real-time sync across all devices' },
  { icon: Users, text: 'Built for remote teams' },
  { icon: Zap, text: 'AI-powered productivity insights' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-done opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-done"></span>
            </span>
            <span className="text-sm text-muted-foreground">Now with AI-powered analytics</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Project management</span>
            <br />
            <span className="text-gradient">for remote teams</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Keep your team in sync with real-time updates, intuitive kanban boards, 
            and smart notifications that respect work hours across time zones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/dashboard">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Button variant="glass" size="xl">
              <Play className="w-5 h-5 mr-1" />
              Watch Demo
            </Button>
          </div>

          {/* Features List */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-muted-foreground">
                <feature.icon className="w-4 h-4 text-status-done" />
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            {/* Glow effect behind preview */}
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl opacity-50" />
            
            {/* Preview container */}
            <div className="relative glass rounded-2xl p-2 shadow-2xl">
              <div className="bg-background rounded-xl overflow-hidden border border-border/50">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-status-in-progress/60" />
                    <div className="w-3 h-3 rounded-full bg-status-done/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                      taskflow.io/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Preview content */}
                <div className="p-6">
                  <div className="flex gap-4">
                    {/* Mini sidebar */}
                    <div className="w-48 space-y-2">
                      <div className="h-8 rounded bg-muted/50" />
                      <div className="h-6 rounded bg-muted/30" />
                      <div className="h-6 rounded bg-primary/30" />
                      <div className="h-6 rounded bg-muted/30" />
                    </div>
                    
                    {/* Main content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-1 h-20 rounded-lg bg-muted/50" />
                        <div className="flex-1 h-20 rounded-lg bg-muted/50" />
                        <div className="flex-1 h-20 rounded-lg bg-muted/50" />
                        <div className="flex-1 h-20 rounded-lg bg-muted/50" />
                      </div>
                      <div className="flex gap-4">
                        <div className="w-72 space-y-2">
                          <div className="h-4 rounded bg-status-todo/30" />
                          <div className="h-24 rounded-lg bg-muted/50" />
                          <div className="h-24 rounded-lg bg-muted/50" />
                        </div>
                        <div className="w-72 space-y-2">
                          <div className="h-4 rounded bg-status-in-progress/30" />
                          <div className="h-24 rounded-lg bg-muted/50" />
                        </div>
                        <div className="w-72 space-y-2">
                          <div className="h-4 rounded bg-status-done/30" />
                          <div className="h-24 rounded-lg bg-muted/50" />
                          <div className="h-24 rounded-lg bg-muted/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
