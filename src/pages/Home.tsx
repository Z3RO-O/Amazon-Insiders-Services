import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DataServices from '@/components/specific/DataServices';
import AmazonServices from '@/components/specific/AmazonServices';
import FeaturedServices from '@/components/specific/FeaturedServices';
import PricingSummary from '@/components/specific/PricingSummary';
import { 
  ShoppingCart, 
  DollarSign, 
  Shield, 
  Zap, 
  Award, 
  TrendingUp, 
  Star, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Target,
  Crown,
  Rocket
} from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white py-24">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-600/20 animate-gradient"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideUp">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-500/30">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium Accounts
                </Badge>
              </div>
              <h1 className="text-6xl font-bold mb-4 text-white">
                Buy Aged
              </h1>
              <h2 className="text-5xl font-bold mb-6 flex items-center gap-3 text-white">
                Amazon Seller Account
                <Sparkles className="w-8 h-8 text-gray-400 animate-pulse" />
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Aged seller accounts are checked by account health, sales history, suspensions, 
                type of fulfillment used to sell, feedback quantity and quality, all performance 
                notifications and ungated brands or categories.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5" />
                  <span>Verified Accounts</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Shield className="w-5 h-5" />
                  <span>100% Safe</span>
                </div>
              </div>
              <Button 
                size="lg" 
                variant="secondary" 
                className="cta-button hover-lift bg-white text-black hover:bg-gray-100 text-lg px-8 py-4"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <DollarSign className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-100 border-orange-500/30">
                  <Rocket className="w-3 h-3 mr-1" />
                  Quick Sale
                </Badge>
              </div>
              <h1 className="text-6xl font-bold mb-4 text-white">
                Sell Your Aged
              </h1>
              <h2 className="text-5xl font-bold mb-6 flex items-center gap-3 text-white">
                Amazon Seller Account
                <TrendingUp className="w-8 h-8 text-gray-400 animate-bounce" />
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Our professional team will support you with the sales and transfer of your Amazon account.
                Get the best market value with our expert evaluation process.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="w-5 h-5" />
                  <span>Best Prices</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Zap className="w-5 h-5" />
                  <span>Fast Process</span>
                </div>
              </div>
              <Button 
                size="lg" 
                variant="outline" 
                className="cta-button hover-lift border-white text-black text-lg px-8 py-4"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Sell Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

            {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <Badge variant="outline" className="mb-4 px-6 py-2 text-black border-gray-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Services
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-black">
              Outstanding <span className="text-gray-700">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of Amazon seller account services designed to boost your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black">Aged Amazon Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Aged Amazon seller account is suitable for all business, especially dropshipping service. 
                  More stable than fresh account on dropship
                </p>
                <div className="flex items-center justify-center gap-2 text-black font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: '0.1s'}}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black">Fresh Amazon Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fresh Amazon seller account which passed video call verification and postcard verification, 
                  which is more friendly for fresh seller to start
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>Verified Safe</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift group border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black">Amazon Hack Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Amazon hack service can help your Amazon business growth especially when you make 
                  FBA professional business
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>Business Growth</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <FeaturedServices />

      {/* Data Services */}
      <DataServices />

      {/* Amazon Services */}
      <AmazonServices />

      {/* Pricing Summary */}
      <PricingSummary />

      {/* Stats Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-600/20 animate-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slideUp">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-white">1073</h3>
              <p className="text-gray-300 font-medium">Account Delivered</p>
            </div>
            <div className="animate-slideUp" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-white">24</h3>
              <p className="text-gray-300 font-medium">7*24H online chat</p>
            </div>
            <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-white">926</h3>
              <p className="text-gray-300 font-medium">Trusted Clients</p>
            </div>
            <div className="animate-slideUp" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-white">763</h3>
              <p className="text-gray-300 font-medium">Cooperator Seller</p>
            </div>
          </div>
          
          <div className="text-center mt-16 animate-slideUp" style={{animationDelay: '0.4s'}}>
            <p className="text-2xl mb-8 text-gray-300">
              We work in partnership with all the <em className="text-white font-semibold">Amazon sellers</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="cta-button hover-lift bg-white text-black hover:bg-gray-100 text-lg px-8 py-4"
                asChild
              >
                <Link to="/buy-account" className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Purchase Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-black border-white hover-lift text-lg px-8 py-4 transition-all duration-300"
                asChild
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <Badge variant="outline" className="mb-4 px-6 py-2 text-black border-gray-300">
              <Star className="w-4 h-4 mr-2" />
              Customer Reviews
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-black">
              Outstanding <span className="text-gray-700">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - see what our satisfied customers have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift border border-gray-200 shadow-lg bg-white animate-scaleIn">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                    JS
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Jack Semper</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-800 text-gray-800" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic leading-relaxed">
                  "Very professional and they have more than 5 years experience on Amazon so they can give very good advice."
                </p>
                <div className="mt-4 flex items-center gap-2 text-black text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Purchase</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: '0.1s'}}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                    KD
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Kim Dennis</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-800 text-gray-800" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic leading-relaxed">
                  "I highly recommend this service. They helped me with any question that I had. Working with you has been a great pleasure for me."
                </p>
                <div className="mt-4 flex items-center gap-2 text-black text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Purchase</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                    PW
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Philip Wilson</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-800 text-gray-800" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic leading-relaxed">
                  "I have bought more than 3 accounts from them, all Amazon accounts work well and I earned more than $100,000 on dropshipping."
                </p>
                <div className="mt-4 flex items-center gap-2 text-black text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Purchase</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border border-gray-200 shadow-lg bg-white animate-scaleIn" style={{animationDelay: '0.3s'}}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                    KD
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Kim Dennis</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-800 text-gray-800" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic leading-relaxed">
                  "I bought an account a couple of weeks ago, I was very pleased. Great service!"
                </p>
                <div className="mt-4 flex items-center gap-2 text-black text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Purchase</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;