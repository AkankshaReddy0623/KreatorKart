
const WhyKreatorKart = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Why KreatorKart?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Brands pay only when they get results
                    </h3>
                    <p className="text-muted-foreground">
                      No upfront costs, no wasted budgets. Brands only pay for verified views and genuine engagement, ensuring every rupee drives real value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Creators earn from views, no followers needed
                    </h3>
                    <p className="text-muted-foreground">
                      Your creativity matters more than your follower count. Earn based on the quality of your content and the engagement it generates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Real-time tracking & transparent payments
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced analytics track your content performance across all platforms. See your earnings grow in real-time with complete transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Phone Mockup showing viral content */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-slate-300">KreatorKart Dashboard</div>
                </div>

                {/* Viral Video Stats */}
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-300">Total Views</span>
                      <span className="text-2xl font-bold text-green-400">2.4M</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-300">Earnings</span>
                      <span className="text-2xl font-bold text-blue-400">₹1,920</span>
                    </div>
                    <div className="text-xs text-slate-400">@ ₹80 per 1K views</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/10 rounded p-2 text-center">
                      <div className="text-lg font-semibold">📱</div>
                      <div className="text-xs text-slate-300">Instagram</div>
                      <div className="text-sm font-medium">1.2M</div>
                    </div>
                    <div className="bg-white/10 rounded p-2 text-center">
                      <div className="text-lg font-semibold">📺</div>
                      <div className="text-xs text-slate-300">YouTube</div>
                      <div className="text-sm font-medium">890K</div>
                    </div>
                    <div className="bg-white/10 rounded p-2 text-center">
                      <div className="text-lg font-semibold">🐦</div>
                      <div className="text-xs text-slate-300">X</div>
                      <div className="text-sm font-medium">310K</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
                <div className="text-sm font-bold">Viral! 🔥</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKreatorKart;
