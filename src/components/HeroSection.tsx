import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Attention into{" "}
                <span className="bg-gradient-to-r from-primary to-slate-600 bg-clip-text text-transparent">
                  Income
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create content. Get views. Get paid.
              </p>
              <p className="text-lg text-muted-foreground">
                Connect with brands, create authentic content, and earn based on real engagement. 
                No follower requirements. Just genuine views.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Earning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Browse Campaigns
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Brand Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">₹2M+</div>
                <div className="text-sm text-muted-foreground">Paid to Creators</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl">
              {/* Phone Mockup */}
              <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs mx-auto">
                <div className="bg-gradient-to-r from-primary to-slate-600 h-2 rounded-full mb-4"></div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-slate-600 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 bg-slate-100 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-slate-200 rounded"></div>
                      <div className="w-6 h-6 bg-slate-200 rounded"></div>
                      <div className="w-6 h-6 bg-slate-200 rounded"></div>
                    </div>
                    <div className="text-sm font-semibold text-primary">1.2M views</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                ₹960 earned!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Views rising ↗️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;