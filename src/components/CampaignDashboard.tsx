import { Button } from "./ui/button";

const CampaignDashboard = () => {
  const campaigns = [
    {
      id: 1,
      brand: "TechFlow",
      logo: "🚀",
      payout: "₹120",
      description: "Create engaging tech review content showcasing our latest productivity app",
      progress: 75,
      type: "UGC",
      platforms: ["Instagram", "YouTube"],
      views: "2.3K",
      color: "bg-blue-500"
    },
    {
      id: 2,
      brand: "EcoWear",
      logo: "🌱",
      payout: "₹80",
      description: "Sustainable fashion haul featuring our eco-friendly clothing line",
      progress: 45,
      type: "Lifestyle",
      platforms: ["Instagram", "X"],
      views: "1.8K",
      color: "bg-green-500"
    },
    {
      id: 3,
      brand: "FitLife",
      logo: "💪",
      payout: "₹95",
      description: "Workout routine videos using our premium fitness equipment",
      progress: 60,
      type: "Fitness",
      platforms: ["YouTube", "Instagram"],
      views: "4.1K",
      color: "bg-orange-500"
    },
    {
      id: 4,
      brand: "CafeBlend",
      logo: "☕",
      payout: "₹70",
      description: "Coffee brewing tutorials featuring our artisan coffee blends",
      progress: 30,
      type: "Food",
      platforms: ["Instagram"],
      views: "950",
      color: "bg-amber-600"
    },
    {
      id: 5,
      brand: "GameZone",
      logo: "🎮",
      payout: "₹150",
      description: "Gaming content and reviews of our latest mobile game releases",
      progress: 85,
      type: "Gaming",
      platforms: ["YouTube", "X"],
      views: "6.7K",
      color: "bg-purple-500"
    },
    {
      id: 6,
      brand: "BookNook",
      logo: "📚",
      payout: "₹60",
      description: "Book review and reading recommendation content for book lovers",
      progress: 20,
      type: "Education",
      platforms: ["Instagram", "YouTube"],
      views: "720",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="campaigns" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Active Campaigns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse and join campaigns that match your interests. Start earning based on real views today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl">
                    {campaign.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{campaign.brand}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${campaign.color}`}>
                        {campaign.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{campaign.payout}</div>
                  <div className="text-xs text-muted-foreground">per 1K views</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {campaign.description}
              </p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Campaign Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${campaign.color}`}
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Platforms & Views */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  {campaign.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-medium text-slate-600">
                  {campaign.views} views
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full bg-primary hover:bg-primary/90">
                Join Campaign
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            View All Campaigns
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignDashboard;