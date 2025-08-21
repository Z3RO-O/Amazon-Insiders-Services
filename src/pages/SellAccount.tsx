import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SellAccount = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sell Your Amazon Seller Account</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our professional team will support you with the sales and transfer of your Amazon account. 
            Get the best value for your aged seller account with our expert evaluation and secure transfer process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Why Sell With Us */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-black">Why Sell With Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Professional Evaluation</h3>
                  <p className="text-gray-600 text-sm">Our experts evaluate your account based on health, sales history, and market value.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Secure Transfer</h3>
                  <p className="text-gray-600 text-sm">Safe and secure account transfer process with full documentation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Best Market Price</h3>
                  <p className="text-gray-600 text-sm">Get competitive pricing based on current market conditions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Quick Process</h3>
                  <p className="text-gray-600 text-sm">Fast evaluation and transfer process, typically completed within 1-3 days.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-black">Account Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Good Account Health</h3>
                  <p className="text-gray-600 text-sm">Account should be in good standing with no recent suspensions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Sales History</h3>
                  <p className="text-gray-600 text-sm">Accounts with established sales history are valued higher.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Positive Feedback</h3>
                  <p className="text-gray-600 text-sm">Good seller feedback rating increases account value.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Complete Documentation</h3>
                  <p className="text-gray-600 text-sm">All account documents and verification materials should be available.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Selling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Reach out with your account details and selling requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Evaluation</h3>
              <p className="text-gray-600 text-sm">Our experts evaluate your account and provide a market valuation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Agreement</h3>
              <p className="text-gray-600 text-sm">Agree on terms, pricing, and transfer conditions.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Transfer</h3>
              <p className="text-gray-600 text-sm">Secure account transfer and payment completion.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Account?</h2>
          <p className="text-xl mb-6 text-gray-300">
            Get a professional evaluation and competitive offer for your Amazon seller account today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Free Evaluation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellAccount;
