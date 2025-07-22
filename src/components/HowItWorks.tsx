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
    <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and results-driven. From campaign launch to creator payout in 5 easy steps.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line - Hidden on mobile, shown on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-slate-200 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                )}

                <div className="relative z-10 text-center">
                  {/* Step Number & Icon */}
                  <div className="mx-auto w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 border-4 border-primary/20">
                    <div className="text-2xl">{step.icon}</div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
