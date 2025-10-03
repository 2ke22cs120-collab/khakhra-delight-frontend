import { Users, Heart, Award, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering rural artisans, one khakhra at a time
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              KhakhraMart was born from a simple vision: to bridge the gap between traditional 
              artisanship and modern consumers while empowering rural communities across Gujarat.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our khakhras are handcrafted by skilled women artisans in rural villages, following 
              age-old recipes passed down through generations. Each crispy, flavorful piece carries 
              the warmth of their dedication and the richness of authentic Indian flavors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By choosing KhakhraMart, you're not just enjoying delicious khakhras – you're supporting 
              sustainable livelihoods, preserving traditional culinary arts, and contributing to the 
              economic empowerment of rural women.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Community First</h3>
              <p className="text-muted-foreground">
                Supporting and empowering rural women through sustainable employment opportunities.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Authentic Craft</h3>
              <p className="text-muted-foreground">
                Preserving traditional recipes and handcrafting methods for authentic taste.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality Assured</h3>
              <p className="text-muted-foreground">
                Premium ingredients and strict quality control for the perfect khakhra every time.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Sustainable</h3>
              <p className="text-muted-foreground">
                Eco-friendly practices and supporting local agricultural communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">Women Artisans Empowered</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Rural Villages Supported</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-lg opacity-90">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
