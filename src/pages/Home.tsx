import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { serviceCategories } from '@/data/services';
import { 
  Shield, 
  Award, 
  TrendingUp, 
  Star, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Target,
  Clock,
  MessageCircle
} from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-muted/30 to-muted/10 animate-gradient"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-muted/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-4 h-4" />
              Professional Amazon Services
              <Sparkles className="w-4 h-4" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AMZ Insiders Services For Amazon Seller
            </h1>
            
            <p className="text-xl mb-8 text-primary-foreground/80 leading-relaxed max-w-4xl mx-auto">
              Comprehensive Amazon seller account services including aged accounts, fresh accounts, 
              hack services, reviews, reports, and business growth solutions. Professional support 
              for all your Amazon business needs.
            </p>
            
            <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">1000+ Accounts Delivered</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">100% Safe & Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:support@amzinsiders.com" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 bg-transparent"
                asChild
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  View Examples
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.id} className={`py-20 px-4 ${categoryIndex % 2 === 0 ? 'bg-gradient-to-b from-background to-muted/20' : 'bg-gradient-to-r from-muted/30 to-muted/10'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg font-semibold">{category.title}</span>
              </div>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className={`grid gap-6 ${category.services.length === 1 ? 'grid-cols-1 justify-items-center max-w-md mx-auto' : category.services.length === 2 ? 'grid-cols-1 md:grid-cols-2 justify-items-center max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {category.services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id} 
                    className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group animate-in fade-in-0 slide-in-from-bottom-4" 
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors flex-1">
                          {service.title}
                        </CardTitle>
                        {service.featured && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      {service.advantage && (
                        <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-primary">
                          <p className="text-sm text-primary">
                            <span className="font-semibold">Key Advantage:</span> {service.advantage}
                          </p>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{service.timeframe}</span>
                        </div>
                      </div>
                      
                      {service.guarantee && (
                        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-lg px-3 py-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">{service.guarantee}</span>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href="mailto:support@amzinsiders.com" className="flex items-center justify-center gap-2">
                          <Target className="w-4 h-4" />
                          Order Now
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-muted/30 to-muted/10 animate-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6" />
                <h3 className="text-3xl font-bold">1073</h3>
              </div>
              <p className="text-primary-foreground/80 font-medium">Accounts Delivered</p>
            </div>
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-6 h-6" />
                <h3 className="text-3xl font-bold">24</h3>
              </div>
              <p className="text-primary-foreground/80 font-medium">24/7 Online Support</p>
            </div>
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-6 h-6" />
                <h3 className="text-3xl font-bold">926</h3>
              </div>
              <p className="text-primary-foreground/80 font-medium">Trusted Clients</p>
            </div>
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-3xl font-bold">763</h3>
              </div>
              <p className="text-primary-foreground/80 font-medium">Partner Sellers</p>
            </div>
          </div>
          
          <div className="text-center mt-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            <p className="text-xl mb-8 text-primary-foreground/90">
              We work in partnership with all the <em className="font-semibold">Amazon sellers</em>
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4"
              asChild
            >
              <a href="mailto:support@amzinsiders.com" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Contact Us Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;