import Sidebar from './Sidebar';
import StatsCard from './StatsCard';
import ChartCard from './ChartCard';

interface WideLayoutProps {
  isVisible: boolean;
}

const WideLayout = ({ isVisible }: WideLayoutProps) => {
  return (
    <section 
      className={`absolute inset-0 transition-all duration-500 ease-out ${
        isVisible 
          ? 'pointer-events-auto opacity-100' 
          : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Center Stage */}
        <section className="order-1 lg:order-2 lg:col-span-6">
          <StatsCard />
        </section>

        {/* Right Column with Chart */}
        <aside className="order-3 lg:col-span-3">
          <ChartCard />
        </aside>
      </div>
    </section>
  );
};

export default WideLayout;