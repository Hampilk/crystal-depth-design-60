import { Diamond, Inbox, Layers, Settings } from 'lucide-react';

interface SidebarItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  isActive?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { id: 'overview', icon: Diamond, label: 'Overview', isActive: true },
  { id: 'inbox', icon: Inbox, label: 'Inbox' },
  { id: 'layers', icon: Layers, label: 'Layers' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <aside className="order-2 lg:order-1 lg:col-span-3">
      <div className="rounded-3xl p-2 glass-secondary">
        <div className="flex flex-col gap-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                className={`group flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition hover:text-white hover:ring-1 hover:ring-white/10 ${
                  item.isActive 
                    ? 'text-neutral-300 bg-white/5' 
                    : 'text-neutral-400'
                }`}
              >
                <div className={`grid h-9 w-9 place-items-center rounded-xl ring-1 ring-white/10 glass-small`}>
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;