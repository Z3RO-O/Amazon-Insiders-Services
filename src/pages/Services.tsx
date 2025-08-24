import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import DataServices from '@/components/specific/DataServices';
import AmazonServices from '@/components/specific/AmazonServices';
import { serviceCategories, paymentSupport, contactInfo } from '@/data/services';
import { 
  Crown, 
  Sparkles, 
  Rocket, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Target,
  BarChart3,
  Settings,
  Clock,
  DollarSign,
  Star,
  CreditCard,
  Phone
} from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slideUp">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-black border-gray-300">
            <Settings className="w-4 h-4 mr-2" />
            Professional Services
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Amazon <span className="text-gray-700">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive Amazon seller services designed to boost your business performance, 
            from account management to advanced data analytics and growth optimization.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-black">Account Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Buy and sell aged Amazon seller accounts with full verification, 
                health checks, and secure transfer processes.
              </p>
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold mb-4">
                <CheckCircle className="w-4 h-4" />
                <span>Verified & Secure</span>
              </div>
              <Button 
                className="w-full bg-black text-white hover:bg-gray-800 cta-button"
                asChild
              >
                <Link to="/buy-account" className="flex items-center justify-center gap-2">
                  <Target className="w-4 h-4" />
                  View Accounts
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: '0.1s'}}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-black">Data Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Professional data analysis including ASIN reports, CPC analysis, 
                and comprehensive performance insights.
              </p>
              <div className="flex items-center justify-center gap-2 text-black font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Advanced Analytics</span>
              </div>
              <Button 
                className="w-full bg-gray-800 text-white hover:bg-gray-700 cta-button"
                asChild
              >
                <Link to="/#data-services" className="flex items-center justify-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  View Analytics
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: '0.2s'}}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-black">Growth Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Advanced Amazon optimization including listing management, 
                review handling, and business growth strategies.
              </p>
              <div className="flex items-center justify-center gap-2 text-black font-semibold mb-4">
                <Zap className="w-4 h-4" />
                <span>Business Growth</span>
              </div>
              <Button 
                className="w-full bg-gray-600 text-white hover:bg-gray-500 cta-button"
                asChild
              >
                <Link to="/#amazon-services" className="flex items-center justify-center gap-2">
                  <Rocket className="w-4 h-4" />
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional Amazon seller services with years of experience and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">100% Secure</h3>
              <p className="text-gray-600 text-sm">All transactions and transfers are completely secure and verified</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick turnaround times for all our services and accounts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Verified Quality</h3>
              <p className="text-gray-600 text-sm">All accounts and services are thoroughly tested and verified</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer support via chat and email</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Amazon Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get started with our professional Amazon services today and see the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="cta-button hover-lift bg-white text-black hover:bg-gray-100 text-lg px-8 py-4"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4 transition-all duration-300"
              asChild
            >
              <Link to="/buy-account" className="flex items-center gap-2">
                <Crown className="w-5 h-5" />
                Browse Accounts
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Comprehensive Services Catalog */}
      <div className="mb-20">
        <div className="text-center mb-16 animate-slideUp">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-black border-gray-300">
            <Settings className="w-4 h-4 mr-2" />
            Complete Service Catalog
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-black">
            🔥🔥 <span className="text-gray-700">AMZ Insiders Services For Amazon Seller</span> 🔥🔥
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive Amazon seller services with competitive pricing and guaranteed results
          </p>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-black">{category.title}</h3>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              <Separator className="mt-6 max-w-xs mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.id} className="hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`}}>
                    <CardHeader className="pb-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                          {service.title}
                        </CardTitle>
                        {service.featured && (
                          <Badge variant="default" className="bg-black text-white text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      {service.advantage && (
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          <span className="font-semibold text-gray-800">Advantage:</span> {service.advantage}
                        </p>
                      )}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="font-bold text-green-600 text-lg">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{service.timeframe}</span>
                        </div>
                      </div>
                      {service.priceRange && (
                        <p className="text-xs text-gray-500 mb-3">{service.priceRange}</p>
                      )}
                      {service.guarantee && (
                        <div className="mb-3 p-2 bg-green-100 rounded-lg flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-800">{service.guarantee}</span>
                        </div>
                      )}
                      <Button 
                        size="sm" 
                        className="w-full bg-black text-white hover:bg-gray-800 text-sm"
                        asChild
                      >
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          <Target className="w-4 h-4" />
                          Order Now
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Payment Support Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-black">{paymentSupport.title}</h3>
          </div>
          <p className="text-lg text-gray-600 mb-6">{paymentSupport.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentSupport.methods.map((method, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-black border-gray-300">
                <CheckCircle className="w-4 h-4 mr-2" />
                {method}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-green-600 font-semibold mt-4">{paymentSupport.availability}</p>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="bg-black text-white rounded-2xl p-8 text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-3xl font-bold">{contactInfo.support}</h3>
        </div>
        <p className="text-xl mb-6 text-gray-300">{contactInfo.availability}</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {contactInfo.channels.map((channel, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2 bg-white text-black">
              {channel}
            </Badge>
          ))}
        </div>
        <Button 
          size="lg" 
          variant="secondary" 
          className="cta-button hover-lift bg-white text-black hover:bg-gray-100 text-lg px-8 py-4"
          asChild
        >
          <Link to="/contact" className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Contact Us Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>

      {/* Include service sections */}
      <DataServices />
      <AmazonServices />
    </div>
  );
};

export default Services;
