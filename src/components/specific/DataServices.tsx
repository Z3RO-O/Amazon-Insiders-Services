import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Clock, DollarSign, Sparkles, Star } from 'lucide-react';
import { amazonReportsServices, amazonInternalServices } from '@/data/services';

const DataServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slideUp">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-black border-gray-300">
            <BarChart3 className="w-4 h-4 mr-2" />
            Data Analytics
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-black">
            Amazon Data <span className="text-gray-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional data analysis and insights to optimize your Amazon business performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...amazonReportsServices, ...amazonInternalServices.slice(0, 2)].map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  {service.featured && (
                    <Badge variant="default" className="bg-black text-white text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
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
                    <span className="text-sm font-semibold text-gray-800">Professional Analysis</span>
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

export default DataServices;
