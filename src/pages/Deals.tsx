import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const mockDeals = {
  "lead": [
    { id: "1", title: "Enterprise Deal", value: "$50,000", company: "Tech Corp" },
    { id: "2", title: "Software License", value: "$25,000", company: "StartUp Inc" },
  ],
  "negotiation": [
    { id: "3", title: "Consulting Project", value: "$30,000", company: "Consulting Co" },
  ],
  "closed": [
    { id: "4", title: "Training Program", value: "$15,000", company: "Education Ltd" },
  ],
};

const Deals = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Deals Pipeline</h1>
          <p className="text-gray-600 mt-1">Track and manage your deals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="font-semibold mb-4">Lead ({mockDeals.lead.length})</h2>
            <div className="space-y-4">
              {mockDeals.lead.map((deal) => (
                <Card key={deal.id} className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                  <h3 className="font-medium">{deal.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{deal.company}</p>
                  <p className="text-lg font-semibold text-primary mt-2">{deal.value}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Negotiation ({mockDeals.negotiation.length})</h2>
            <div className="space-y-4">
              {mockDeals.negotiation.map((deal) => (
                <Card key={deal.id} className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                  <h3 className="font-medium">{deal.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{deal.company}</p>
                  <p className="text-lg font-semibold text-primary mt-2">{deal.value}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Closed Won ({mockDeals.closed.length})</h2>
            <div className="space-y-4">
              {mockDeals.closed.map((deal) => (
                <Card key={deal.id} className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                  <h3 className="font-medium">{deal.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{deal.company}</p>
                  <p className="text-lg font-semibold text-primary mt-2">{deal.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Deals;