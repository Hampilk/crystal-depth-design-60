import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Activity, DollarSign, Eye, Heart } from 'lucide-react';

interface ContentProps {
  children?: React.ReactNode;
}

const statsData = [
  { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: DollarSign, trend: 'up' },
  { title: 'Active Users', value: '2,350', change: '+15.2%', icon: Users, trend: 'up' },
  { title: 'Page Views', value: '12,234', change: '+8.7%', icon: Eye, trend: 'up' },
  { title: 'Engagement', value: '98.2%', change: '+3.1%', icon: Heart, trend: 'up' },
];

const recentActivity = [
  { action: 'New user registration', user: 'John Doe', time: '2 minutes ago' },
  { action: 'Purchase completed', user: 'Jane Smith', time: '5 minutes ago' },
  { action: 'Profile updated', user: 'Mike Johnson', time: '10 minutes ago' },
  { action: 'Comment posted', user: 'Sarah Wilson', time: '15 minutes ago' },
];

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="flex-1 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        {children || (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <div className="raszter-chip p-2 rounded-lg">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                        {stat.change} from last month
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart Card */}
              <GlassCard variant="raszter" className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Analytics Overview</h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="h-64 raszter-surface rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Chart placeholder</p>
                  </div>
                </div>
              </GlassCard>

              {/* Activity Feed */}
              <GlassCard variant="raszter" className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Recent Activity</h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="raszter-surface p-4 rounded-xl">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-sm">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.user}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Full Width Feature Card */}
            <GlassCard variant="raszter" className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Enhanced with Raster Effects</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Experience the difference with our new raster design system. Every component now features 
                  enhanced depth, shadows, and highlights that mimic Photoshop's "Raster on" effect.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="raster" size="lg">Explore Components</Button>
                  <Button variant="ghost" size="lg">Documentation</Button>
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </main>
  );
};