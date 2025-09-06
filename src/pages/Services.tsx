import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import OrderForm from '@/components/common/OrderForm';
import {
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Crown,
  BarChart3,
  Clock,
  Zap,
  TrendingUp,
  Eye,
  RefreshCw
} from 'lucide-react';

const Services = () => {
  const serviceExamples = [
    {
      id: 'aged-account',
      category: 'Amazon Accounts',
      title: 'Aged Amazon Seller Account',
      icon: Crown,
      description:
        'Professional aged Amazon seller account with complete history and performance metrics.',
      features: [
        'Account Age: 2-5 years established',
        'Clean performance metrics with no suspensions',
        'Verified business information and documents',
        'Previous sales history available for review',
        'All necessary verifications completed',
        'Ready for immediate use with FBA/FBM'
      ],
      advantages: [
        'Higher trust level with Amazon algorithms',
        'Better chance of winning buy box',
        'Faster approval for new product categories',
        'Lower risk of account suspension',
        'Established seller reputation'
      ],
      price: '$1,500 - $5,000',
      deliveryTime: '24-48 hours',
      guarantee: '30-day money-back guarantee',
      popular: true
    },
    {
      id: 'review-service',
      category: 'Review Services',
      title: 'Amazon Verified Review Service',
      icon: Star,
      description:
        'Professional Amazon review service with verified purchase reviews from real customers.',
      features: [
        'Verified purchase reviews only',
        'Real customer accounts (not bots)',
        'Natural review posting timeline',
        'Detailed product feedback',
        'Photo and video reviews available',
        'Multiple marketplace coverage'
      ],
      advantages: [
        'Improves product visibility and ranking',
        'Increases conversion rates',
        'Builds customer trust and credibility',
        'Helps with Amazon SEO optimization',
        'Competitive advantage in marketplace'
      ],
      price: '$200 per review package',
      deliveryTime: '5-10 business days',
      guarantee: 'Review replacement if removed',
      popular: true
    },
    {
      id: 'hack-service',
      category: 'Growth Services',
      title: 'Amazon Business Growth Service',
      icon: Zap,
      description: 'Comprehensive Amazon business optimization and growth acceleration service.',
      features: [
        'Keyword optimization and SEO',
        'Listing optimization for conversion',
        'PPC campaign setup and management',
        'Inventory management consultation',
        'Competitor analysis and strategy',
        'Performance monitoring and reporting'
      ],
      advantages: [
        'Rapid business growth and scaling',
        'Professional optimization strategies',
        'Data-driven decision making',
        'Competitive market positioning',
        'ROI improvement and profit maximization'
      ],
      price: '$500 - $2,000/month',
      deliveryTime: 'Ongoing service',
      guarantee: 'Performance improvement guarantee',
      popular: false
    },
    {
      id: 'reports',
      category: 'Analytics & Reports',
      title: 'Amazon Business Reports',
      icon: BarChart3,
      description:
        'Detailed Amazon business analytics and performance reports for data-driven decisions.',
      features: [
        'Sales performance analytics',
        'Keyword performance tracking',
        'Competitor analysis reports',
        'PPC campaign performance',
        'Customer behavior insights',
        'Market trend analysis'
      ],
      advantages: [
        'Data-driven business decisions',
        'Performance optimization insights',
        'Competitive advantage through analytics',
        'ROI tracking and improvement',
        'Strategic planning support'
      ],
      price: '$100 - $500 per report',
      deliveryTime: '2-5 business days',
      guarantee: 'Accurate data guarantee',
      popular: false
    },
    {
      id: 'hijacker-removal',
      category: 'Protection Services',
      title: 'Hijacker Removal Service',
      icon: Shield,
      description:
        'Professional service to remove unauthorized sellers from your product listings.',
      features: [
        'Unauthorized seller identification',
        'Amazon policy violation reporting',
        'Brand protection enforcement',
        'Legal documentation support',
        'Continuous monitoring service',
        'Fast resolution process'
      ],
      advantages: [
        'Protects brand integrity and pricing',
        'Maintains exclusive buy box control',
        'Prevents counterfeit product sales',
        'Preserves customer experience',
        'Safeguards business revenue'
      ],
      price: '$180 per removal',
      deliveryTime: '1-2 business days',
      guarantee: '30-day protection guarantee',
      popular: false
    },
    {
      id: 'account-reinstatement',
      category: 'Recovery Services',
      title: 'Account Reinstatement Service',
      icon: RefreshCw,
      description: 'Professional Amazon account reinstatement service for suspended accounts.',
      features: [
        'Suspension reason analysis',
        'Professional appeal letter writing',
        'Plan of action development',
        'Documentation preparation',
        'Direct Amazon communication',
        'Follow-up and support'
      ],
      advantages: [
        'Higher success rate than DIY appeals',
        'Professional communication with Amazon',
        'Faster reinstatement process',
        'Comprehensive problem resolution',
        'Prevention of future suspensions'
      ],
      price: '$300 - $800',
      deliveryTime: '5-14 business days',
      guarantee: 'No success, no payment',
      popular: false
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg font-semibold">Service Examples</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Detailed Service Examples & Case Studies
            </h1>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto">
              Explore detailed examples of our Amazon services to understand exactly what you'll
              receive. Each service includes comprehensive features, clear advantages, and
              guaranteed results.
            </p>
          </div>
        </div>
      </section>

      {/* Service Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceExamples.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group animate-in fade-in-0 slide-in-from-bottom-4 relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 text-xs">
                          {service.category}
                        </Badge>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-6">
                    {/* Service Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Advantages */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.advantages.map((advantage, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div className="font-semibold text-primary">{service.price}</div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <div className="font-semibold">{service.deliveryTime}</div>
                      </div>
                    </div>

                    {/* Guarantee */}
                    <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-lg px-3 py-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{service.guarantee}</span>
                    </div>

                    {/* CTA Button */}
                    <OrderForm serviceName={service.title} servicePrice={service.price}>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
                        <MessageCircle className="w-4 h-4" />
                        Request This Service
                      </Button>
                    </OrderForm>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and get a customized service package
              tailored to your Amazon business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4"
                asChild
              >
                <a
                  href="https://wa.me/+18658880593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
