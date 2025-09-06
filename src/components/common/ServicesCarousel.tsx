import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { featuredServices, serviceCategories } from '@/data/services';
import type { ServiceItem } from '@/data/services';
import { Star, Clock } from 'lucide-react';

// ServiceCard component with liquid spill animation
const ServiceCard = ({ service, sectionId }: { service: ServiceItem; sectionId: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const IconComponent = service.icon;

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/#${sectionId}`);
    // Scroll to the section after navigation
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="block h-full">
      <motion.div
        className="h-full relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <Card className="h-full flex flex-col relative overflow-hidden cursor-pointer border-2 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
          
          {/* Liquid Spill Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 z-10"
                initial={{
                  clipPath: "circle(0% at 100% 0%)",
                }}
                animate={{
                  clipPath: "circle(150% at 100% 0%)",
                }}
                exit={{
                  clipPath: "circle(0% at 100% 0%)",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  background: "linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #000000 70%, #0a0a0a 100%)",
                }}
              />
            )}
          </AnimatePresence>


          <CardHeader className="pb-4 relative z-20">
            <div className="flex items-start gap-3 mb-2">
              <motion.div 
                className="p-2 rounded-lg shrink-0"
                animate={isHovered ? 
                  { backgroundColor: "rgba(255,255,255,0.2)" } : 
                  { backgroundColor: "hsl(var(--primary) / 0.1)" }
                }
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.div
                  animate={isHovered ? { color: "#ffffff" } : { color: "hsl(var(--primary))" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <IconComponent className="h-5 w-5" />
                </motion.div>
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.div
                  animate={isHovered ? { color: "#ffffff" } : { color: "inherit" }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <CardTitle className="text-base font-semibold line-clamp-2">
                    {service.title}
                  </CardTitle>
                </motion.div>
                {service.featured && (
                  <motion.div
                    animate={isHovered ? 
                      { backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff", borderColor: "rgba(255,255,255,0.2)" } : 
                      { backgroundColor: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))", borderColor: "hsl(var(--primary) / 0.2)" }
                    }
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border mt-2"
                  >
                    <Star className="w-3 h-3" />
                    Featured
                  </motion.div>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 space-y-4 pt-0 relative z-20">
            <motion.p 
              className="text-sm leading-relaxed line-clamp-3"
              animate={isHovered ? { color: "rgba(255,255,255,0.8)" } : { color: "hsl(var(--muted-foreground))" }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {service.description}
            </motion.p>

            <div className="flex items-center justify-between">
              <motion.span 
                className="font-bold text-lg"
                animate={isHovered ? { color: "#ffffff" } : { color: "hsl(var(--primary))" }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                {service.price}
              </motion.span>
              <motion.div 
                className="flex items-center gap-2 text-xs"
                animate={isHovered ? { color: "rgba(255,255,255,0.7)" } : { color: "hsl(var(--muted-foreground))" }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Clock className="w-4 h-4" />
                <span>{service.timeframe}</span>
              </motion.div>
            </div>

            {service.advantage && (
              <motion.div 
                className="p-2 rounded-lg border-l-2"
                animate={isHovered ? 
                  { backgroundColor: "rgba(255,255,255,0.1)", borderColor: "#ffffff" } : 
                  { backgroundColor: "hsl(var(--primary) / 0.05)", borderColor: "hsl(var(--primary))" }
                }
                transition={{ duration: 0.3, delay: 0.45 }}
              >
                <motion.p 
                  className="text-xs font-medium"
                  animate={isHovered ? { color: "#ffffff" } : { color: "hsl(var(--primary))" }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  {service.advantage}
                </motion.p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const ServicesCarousel = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ 
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      stopOnLastSnap: false,
      playOnInit: true,
      jump: false
    })
  );

  // Get unique services for carousel (only 3 cards)
  const allServices = [
    ...featuredServices,
    ...serviceCategories.flatMap(category => category.services)
  ];
  
  // Filter unique services by ID and limit to 3
  const uniqueServices = allServices.filter((service, index, self) => 
    index === self.findIndex(s => s.id === service.id)
  );
  
  const carouselServices = uniqueServices;

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <h3 className="text-2xl font-bold mb-4">Ready to Boost Your Amazon Business?</h3>
          <p className="text-lg text-muted-foreground max-w-full mx-auto">
            Discover our comprehensive range of Amazon seller services designed to boost your business growth and success
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: false,
              containScroll: "trimSnaps"
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
             <CarouselContent className="-ml-2 md:-ml-4">
               {carouselServices.map((service) => {
                 // Find the service category to get the correct section ID
                 const serviceCategory = serviceCategories.find(cat => 
                   cat.services.some(s => s.id === service.id)
                 );
                 const sectionId = serviceCategory?.id || 'services';
                 
                 return (
                   <CarouselItem key={service.id} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                     <ServiceCard service={service} sectionId={sectionId} />
                   </CarouselItem>
                 );
               })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 text-primary hover:bg-primary/10" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 text-primary hover:bg-primary/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
