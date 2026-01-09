import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Heart, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Our Restaurant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving delicious food with love and passion since day one
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to our culinary haven! We believe that great food brings
                people together. Every dish we serve is crafted with the finest
                ingredients and prepared with care by our talented chefs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From traditional recipes passed down through generations to
                innovative new creations, we're committed to delivering an
                unforgettable dining experience that keeps you coming back for more.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We source only the freshest, highest quality ingredients for all our dishes
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Made with Love
              </h3>
              <p className="text-gray-600">
                Every dish is prepared with passion and attention to detail
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Service
              </h3>
              <p className="text-gray-600">
                Quick preparation without compromising on quality or taste
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/menu">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              View Our Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};