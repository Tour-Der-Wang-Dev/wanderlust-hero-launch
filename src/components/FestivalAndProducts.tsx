
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface Event {
  image: string;
  title: string;
}

interface Product {
  image: string;
  title: string;
  price: number;
}

interface FestivalAndProductsProps {
  events: Event[];
  products: Product[];
}

const FestivalAndProducts: React.FC<FestivalAndProductsProps> = ({ events, products }) => {
  return (
    <section id="festivals" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <CalendarDays className="text-orange-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Festivals & Events</h2>
          </div>
          
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
            Experience the vibrant culture and traditional celebrations throughout the year in Wang Sam Mo.
          </p>

          <div className="relative px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {events.map((event, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="h-full p-1">
                      <Card className="h-full overflow-hidden border-none shadow-md">
                        <div className="h-60 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-xl">{event.title}</h3>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Local Products</h2>
          
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
            Discover authentic Thai crafts and specialties made by local artisans.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="font-semibold text-orange-500">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalAndProducts;
