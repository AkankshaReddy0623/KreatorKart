const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Content Creator",
      avatar: "👩‍💻",
      content: "KreatorKart changed my life! I went from earning nothing to ₹15,000/month just by creating content I love. No follower requirements means everyone has a fair shot.",
      earnings: "₹15K/month",
      platform: "Instagram • YouTube"
    },
    {
      name: "Rahul Gupta",
      role: "Marketing Director, TechFlow",
      avatar: "👨‍💼",
      content: "Finally, a platform where we only pay for results. Our campaigns reach authentic audiences, and the ROI is incredible. KreatorKart delivered 3x more engagement than traditional ads.",
      company: "TechFlow",
      results: "3x ROI increase"
    },
    {
      name: "Sneha Patel",
      role: "Student & Part-time Creator",
      avatar: "👩‍🎓",
      content: "Perfect for students like me! I create content between classes and earn enough to cover my expenses. The campaign briefs are clear and payments are always on time.",
      earnings: "₹8K/month",
      platform: "Instagram • X"
    },
    {
      name: "David Chen",
      role: "Brand Manager, EcoWear",
      avatar: "👨‍🌾",
      content: "We found genuine creators who actually care about sustainability. The content feels authentic because it is. Our brand awareness increased by 200% in just 3 months.",
      company: "EcoWear",
      results: "200% awareness boost"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real creators and brands sharing their KreatorKart journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-slate-600 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Stats */}
              <div className="border-t border-slate-100 pt-4">
                {testimonial.earnings && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Monthly Earnings</span>
                    <span className="text-sm font-bold text-green-600">{testimonial.earnings}</span>
                  </div>
                )}
                {testimonial.results && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Results</span>
                    <span className="text-sm font-bold text-blue-600">{testimonial.results}</span>
                  </div>
                )}
                {testimonial.platform && (
                  <div className="text-xs text-muted-foreground">
                    <span>Platforms: {testimonial.platform}</span>
                  </div>
                )}
                {testimonial.company && (
                  <div className="text-xs font-medium text-primary">
                    {testimonial.company}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary to-slate-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Thousands of Successful Creators?</h3>
          <p className="text-lg mb-6 opacity-90">Start your journey today and turn your creativity into income</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Start as Creator
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Partner as Brand
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;