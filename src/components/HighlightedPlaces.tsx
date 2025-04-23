
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GridIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Location {
  title: string;
  image: string;
  description: string;
}

interface HighlightedPlacesProps {
  locations: Location[];
}

const HighlightedPlaces: React.FC<HighlightedPlacesProps> = ({ locations }) => {
  const { t } = useLanguage();
  
  return (
    <section id="places" className="py-16 md:py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <GridIcon className="text-orange-500 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">{t("places.title")}</h2>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12">
          {t("places.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col dark:bg-gray-700">
              <div className="h-48 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                />
              </div>
              <CardHeader>
                <CardTitle>{location.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-300">{location.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost"
                  className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 p-0 h-auto"
                >
                  {t("places.viewMore")}
                  <span className="ml-2">→</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedPlaces;
