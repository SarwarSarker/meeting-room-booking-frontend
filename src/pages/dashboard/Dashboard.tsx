import { Card } from "@/components/ui/card";

export function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-lg font-medium">Total Revenue</h3>
          <p className="text-2xl font-bold">$45,231.89</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium">Subscriptions</h3>
          <p className="text-2xl font-bold">+2350</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium">Sales</h3>
          <p className="text-2xl font-bold">+12,234</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium">Active Now</h3>
          <p className="text-2xl font-bold">+573</p>
        </Card>
      </div>
    </div>
  );
}