import { ArrowUpRight, Plus, Shield, Settings, CreditCard, CheckCircle, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Wallet = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-06-10",
      time: "14:30",
      type: "Payout Received",
      amount: 2500.00,
      status: "Completed",
      platform: "YouTube"
    },
    {
      id: 2,
      date: "2024-06-08",
      time: "09:15",
      type: "Campaign Bonus",
      amount: 500.00,
      status: "Completed",
      platform: "Instagram"
    },
    {
      id: 3,
      date: "2024-06-05",
      time: "16:45",
      type: "Withdrawal",
      amount: -1000.00,
      status: "Completed",
      platform: null
    },
    {
      id: 4,
      date: "2024-06-03",
      time: "11:20",
      type: "Payout Received",
      amount: 1800.00,
      status: "Completed",
      platform: "YouTube"
    },
    {
      id: 5,
      date: "2024-06-01",
      time: "08:30",
      type: "Fee",
      amount: -50.00,
      status: "Completed",
      platform: null
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Bank Account",
      details: "****2847",
      verified: true
    },
    {
      id: 2,
      type: "UPI",
      details: "creator@paytm",
      verified: true
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "Failed":
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Wallet</h1>
            <p className="text-muted-foreground">Manage your earnings and payments</p>
          </div>

          {/* Wallet Balance Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-slate-50 border shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  ₹12,487.50
                </div>
                <p className="text-muted-foreground text-lg">Available to withdraw</p>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <ArrowUpRight className="w-5 h-5 mr-2" />
                Withdraw Funds
              </Button>
              
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Next Payout Date: <span className="font-medium">June 15, 2024</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Four Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Transaction History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {transactions.map((transaction, index) => (
                    <div key={transaction.id}>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(transaction.status)}
                          <div>
                            <div className="font-medium text-sm">
                              {transaction.type}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {transaction.date.split('-')[2]}/{transaction.date.split('-')[1]}
                              {transaction.platform && (
                                <span className="ml-1">• {transaction.platform}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-semibold text-sm ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toFixed(0)}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                      {index < transactions.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Earnings Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Earnings Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Lifetime</span>
                    <span className="font-semibold text-sm">₹45,230</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">This Month</span>
                    <span className="font-semibold text-sm">₹8,750</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">YouTube</span>
                    <span className="text-xs font-medium">₹5,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Instagram</span>
                    <span className="text-xs font-medium">₹2,100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">X (Twitter)</span>
                    <span className="text-xs font-medium">₹950</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Bonus Rewards</span>
                    <span className="font-semibold text-sm text-green-600">₹500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-2 border border-border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm">{method.type}</div>
                        <div className="text-xs text-muted-foreground">{method.details}</div>
                      </div>
                    </div>
                    {method.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                ))}
                
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="w-3 h-3 mr-1" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            {/* Security & Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Security & Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Two-Factor Auth</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs px-2 py-1">Enable</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Withdrawal PIN</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs px-2 py-1">Setup</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Notifications</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs px-2 py-1">Manage</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;