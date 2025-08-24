import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DollarSign, Clock, Star, Target, CheckCircle } from 'lucide-react';

const PricingSummary = () => {
  const keyPricing = [
    {
      service: "Brand Name Change",
      price: "$400",
      timeframe: "3-5 days",
      popular: true
    },
    {
      service: "Internal Screenshots",
      price: "$180",
      timeframe: "1-2 days",
      popular: false
    },
    {
      service: "ASIN Report",
      price: "$100",
      timeframe: "1-2 days",
      popular: false
    },
    {
      service: "Remove Hijacker",
      price: "$180",
      timeframe: "2 days",
      popular: true
    },
    {
      service: "Lightning Deal",
      price: "$200",
      timeframe: "1 day",
      popular: false
    },
    {
      service: "Keyword Search & Review",
      price: "$200",
      timeframe: "5-10 days",
      popular: true
    },
    {
      service: "Back Down Competitors",
      price: "$350",
      timeframe: "3-7 days",
      popular: false
    },
    {
      service: "E-commerce Website",
      price: "$400-$5,000",
      timeframe: "2-4 weeks",
      popular: true
    },
    {
      service: "PPC Report",
      price: "$200",
      timeframe: "1-2 days",
      popular: false
    },
    {
      service: "Business Report",
      price: "$200",
      timeframe: "2-3 days",
      popular: false
    },
    {
      service: "USPS Tracking",
      price: "$200-$800",
      timeframe: "Ongoing",
      popular: false
    },
    {
      service: "eBay Reinstatement",
      price: "$400-$600",
      timeframe: "5-14 days",
      popular: true
    },
    {
      service: "Remove eBay Negative Feedback",
      price: "$100-$150",
      timeframe: "3-5 days",
      popular: false
    },
    {
      service: "Remove Defects",
      price: "$200",
      timeframe: "5-7 days",
      popular: false
    },
    {
      service: "Withdraw Funds (Blocked Account)",
      price: "25% of funds",
      timeframe: "1-2 weeks",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slideUp">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-black border-gray-300">
            <DollarSign className="w-4 h-4 mr-2" />
            Service Pricing
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-black">
            Transparent <span className="text-gray-700">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every single task has a buy button with clear pricing and delivery timeframes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyPricing.map((item, index) => (
            <Card key={index} className="hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn relative" style={{animationDelay: `${index * 0.05}s`}}>
              {item.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="default" className="bg-orange-500 text-white text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                  {item.service}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-green-600 text-xl">{item.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.timeframe}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-green-600 text-sm mb-4">
                  <CheckCircle className="w-4 h-4" />
                  <span>Professional Service</span>
                </div>
                
                <Button 
                  size="sm"
                  className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <Target className="w-4 h-4" />
                    Order Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">Special Service</h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">Withdraw Funds by Blocked Account</p>
                <p className="text-2xl font-bold text-green-600">25% of funds</p>
                <p className="text-sm text-gray-500">Success-based pricing</p>
              </div>
            </div>
            <Button 
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-4"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSummary;
