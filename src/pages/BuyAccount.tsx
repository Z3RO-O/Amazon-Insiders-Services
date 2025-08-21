import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BuyAccount = () => {
  const accounts = [
    {
      id: "#1091",
      price: "$1600",
      market: "North America",
      registration: "China", 
      year: "2020",
      turnover: "$14,300",
      orders: "1441",
      feedback: "14 and 5 rating",
      plan: "Pro plan, without utility bill"
    },
    {
      id: "#1092",
      price: "$2100",
      market: "North America",
      registration: "China",
      year: "2021", 
      turnover: "$45,200",
      orders: "3100",
      feedback: "35 and 5 rating",
      plan: "Pro plan, without utility bill",
      featured: true
    },
    {
      id: "#1093",
      price: "$2700",
      market: "North America",
      registration: "China",
      year: "2020",
      turnover: "$155,200", 
      orders: "6500",
      feedback: "129 and 5 rating",
      plan: "Pro plan, without utility bill"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Buy Amazon Seller Account</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aged seller accounts are checked by account health, sales history, suspensions, 
            type of fulfillment used to sell, feedback quantity and quality, all performance 
            notifications and ungated brands or categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accounts.map((account, index) => (
            <Card key={index} className={`text-center ${account.featured ? 'border-black border-2 shadow-lg' : 'border border-gray-200'}`}>
              <CardHeader>
                <Badge variant={account.featured ? "default" : "secondary"} className="mb-2">
                  {account.id}
                </Badge>
                <CardTitle className="text-3xl font-bold text-black">{account.price}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm mb-6">
                  <li>• Market: {account.market}</li>
                  <li>• Registration: {account.registration}</li>
                  <li>• Registration year: {account.year}</li>
                  <li>• Turnover: {account.turnover}</li>
                  <li>• FBA orders: {account.orders}</li>
                  <li>• Feedback: {account.feedback}</li>
                  <li>• {account.plan}</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link to="/contact">Purchase Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Aged Accounts?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-black">Account Health Verified</h3>
              <p className="text-gray-600">All accounts are thoroughly checked for account health, performance metrics, and compliance history.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-black">Sales History Included</h3>
              <p className="text-gray-600">Complete sales history and performance data to help you understand the account's potential.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-black">No Suspensions</h3>
              <p className="text-gray-600">Clean accounts with no suspension history and good standing with Amazon.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-black">Ungated Categories</h3>
              <p className="text-gray-600">Access to ungated brands and categories for immediate selling opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAccount;
