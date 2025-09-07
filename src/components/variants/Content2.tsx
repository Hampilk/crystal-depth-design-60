import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Activity, DollarSign, Eye, Heart, ArrowUpRight } from 'lucide-react';

export const Content2: React.FC = () => {
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

  return (
    <main className="flex-1 px-4 pb-24">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-white mb-4">Dashboard Overview</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Monitor your application's performance with our comprehensive analytics dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    {stat.title}
                  </CardTitle>
                  <div className="p-2 rounded-lg bg-white/10">
                    <Icon className="h-4 w-4 text-blue-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="flex items-center text-xs text-green-400">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change} from last month
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Analytics Chart */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Analytics Overview</CardTitle>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    View All
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <Activity className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-white/60">Chart visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Feed */}
          <div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-sm text-white">{activity.action}</p>
                          <p className="text-xs text-white/60">{activity.user}</p>
                        </div>
                        <span className="text-xs text-white/40">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/70">Load Time</span>
                <span className="text-white font-medium">2.3s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Bounce Rate</span>
                <span className="text-white font-medium">23.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Conversion</span>
                <span className="text-white font-medium">8.2%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                Export Report
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                Schedule Meeting
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};