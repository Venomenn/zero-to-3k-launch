
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users } from 'lucide-react';

interface BundleCardProps {
  id: string;
  title: string;
  description: string;
  salePrice: number;
  regularPrice: number;
  discount: number;
  expiresIn: string;
  buyers: number;
  imageSrc: string;
  toolCount: number;
}

const BundleCard: React.FC<BundleCardProps> = ({
  id,
  title,
  description,
  salePrice,
  regularPrice,
  discount,
  expiresIn,
  buyers,
  imageSrc,
  toolCount
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-gray-100">
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-brand-blue text-white text-sm font-bold px-3 py-1 rounded-full">
          {discount}% OFF
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{toolCount} premium tools included</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-brand-blue">${salePrice}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">${regularPrice}</span>
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-500 pt-2">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{expiresIn} left</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{buyers} buyers</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
          <Link to={`/bundle/${id}`}>View Bundle</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BundleCard;
