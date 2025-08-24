import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { featuredServices } from '@/data/services';
import { Clock, DollarSign, Star, Target, ArrowRight } from 'lucide-react';

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slideUp">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-black border-gray-300">
            <Star className="w-4 h-4 mr-2" />
            Featured Services
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-black">
            🔥🔥 <span className="text-gray-700">AMZ Insiders Services For Amazon Seller</span> 🔥🔥
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular and effective services for Amazon sellers with guaranteed results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.slice(0, 6).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="default" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold">
                    <Star className="w-3 h-3 mr-1" />
                    FEATURED
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.advantage && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">Key Advantage:</span> {service.advantage}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-green-600 text-xl">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.timeframe}</span>
                    </div>
                  </div>
                  
                  {service.guarantee && (
                    <div className="mb-4 p-2 bg-green-100 rounded-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-green-800">{service.guarantee}</span>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      <Target className="w-4 h-4" />
                      Order Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 transition-all duration-300"
            asChild
          >
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
