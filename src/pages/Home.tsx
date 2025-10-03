import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Heart, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Authentic Khakhra"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Authentic Khakhra,
              <span className="text-primary block">Handcrafted with Love</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience the taste of tradition. Supporting rural artisans, delivering crispy perfection to your home.
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button size="lg" className="text-lg">
                  Order Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose KhakhraMart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">100% Authentic</h3>
              <p className="text-muted-foreground">
                Traditional recipes passed down through generations, made with authentic ingredients.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Handcrafted</h3>
              <p className="text-muted-foreground">
                Every khakhra is lovingly handmade by skilled artisans with years of expertise.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Empowering Communities</h3>
              <p className="text-muted-foreground">
                Supporting rural women and local communities through sustainable employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Experience Authentic Taste?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Browse our selection of handcrafted khakhras and place your order today.
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="text-lg">
              View Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
