const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Brands Launch Campaigns",
      description: "Brands upload their brief, set payout per 1K views, and launch campaigns for authentic content creation.",
      icon: "🎯"
    },
    {
      step: "2",
      title: "Creators Join & Create",
      description: "Browse active campaigns, choose what resonates with you, and create engaging content that matches the brief.",
      icon: "🎨"
    },
    {
      step: "3",
      title: "Post on Social Media",
      description: "Share your content on Instagram, YouTube, X (Twitter), or other platforms to reach your audience.",
      icon: "📱"
    },
    {
      step: "4",
      title: "KreatorKart Tracks Views",
      description: "Our advanced system monitors real views and engagement across all platforms automatically.",
      icon: "📊"
    },
    {
      step: "5",
      title: "Get Paid",
      description: "Receive payments based on verified views. No follower count required - just genuine engagement.",
      icon: "💰"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        {/* Animated Orbs */}
        <div className="absolute top-20 left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-[20%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            How It{" "}
            <span className="text-gradient neon-text animate-glow">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto animate-float">
            Simple, transparent, and results-driven. From campaign launch to creator payout in 5 easy steps.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group perspective-1000">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 z-0">
                    <div className="h-full gradient-neon neon-glow animate-pulse"></div>
                  </div>
                )}

                {/* Card */}
                <div className="relative z-10">
                  {/* Step Icon & Number */}
                  <div className="relative mx-auto mb-6">
                    {/* Outer Circle */}
                    <div className="w-24 h-24 glass card-highlight neon-glow rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
                      {/* Inner Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-3xl transform transition-all duration-500 group-hover:scale-125 animate-float">{step.icon}</div>
                      </div>
                      {/* Gradient Border */}
                      <div className="absolute -inset-px rounded-2xl gradient-neon opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 glass rounded-full flex items-center justify-center text-sm font-bold neon-glow">
                      <div className="text-gradient neon-text">{step.step}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="glass card-highlight neon-glow rounded-2xl p-6 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                    <h3 className="text-lg font-semibold text-gradient neon-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Call to Action */}
        <div className="text-center mt-20">
          <div className="glass card-highlight neon-glow rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gradient neon-text mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-muted-foreground/80 mb-6">Join thousands of creators who are already earning through authentic content</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-neon text-white px-8 py-3 rounded-xl font-semibold interactive-hover group overflow-hidden relative">
                <span className="relative z-10">Create Account</span>
                <div className="absolute inset-0 shimmer"></div>
              </button>
              <button className="gradient-border bg-background px-8 py-3 rounded-xl font-semibold interactive-hover">
                <span className="text-gradient neon-text">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
