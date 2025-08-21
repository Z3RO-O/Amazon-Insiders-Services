import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Target, Shield, Zap, Package, Ban, Merge, Clock, DollarSign, Sparkles } from 'lucide-react';

const AmazonServices = () => {
  const amazonServices = [
    {
      title: "Remap ASIN",
      advantage: "remap SKU to a full new ASIN",
      price: "$200",
      timeframe: "1 day",
      icon: Target,
      color: "from-black to-gray-800"
    },
    {
      title: "Remove Hijacker",
      advantage: "own buy box exclusive", 
      price: "FBA hijacker $150, FBM hijacker $120",
      timeframe: "2 day",
      icon: Shield,
      color: "from-gray-800 to-gray-700"
    },
    {
      title: "Apply 7d deal/lighting deal",
      advantage: "attract traffic,rank keywords,Expand sales",
      price: "$150",
      timeframe: "1 day",
      icon: Zap,
      color: "from-gray-700 to-gray-600"
    },
    {
      title: "Create Shipping Plan",
      advantage: "We will help you to create shipping plan when stock capacity is exceeded",
      price: "$200",
      timeframe: "1day",
      icon: Package,
      color: "from-gray-600 to-gray-500"
    },
    {
      title: "Block listing",
      advantage: "block competitors listing when you received attack",
      price: "$250",
      timeframe: "1-4 day",
      icon: Ban,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Merge Review",
      advantage: "Increase review number",
      price: "$4/per",
      timeframe: "1 day",
      icon: Merge,
      color: "from-gray-500 to-gray-400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slideUp">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-black border-gray-300">
            <Settings className="w-4 h-4 mr-2" />
            Growth Services
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-black">Outstanding <span className="text-gray-700">Amazon Service</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional Amazon optimization services to accelerate your business growth and maximize performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amazonServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    <span className="font-semibold text-gray-800">Advantage:</span> {service.advantage}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-black" />
                      <span className="font-bold text-black text-lg">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{service.timeframe}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-2 bg-gray-100 rounded-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-black" />
                    <span className="text-sm font-semibold text-gray-800">Growth Optimization</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmazonServices;
