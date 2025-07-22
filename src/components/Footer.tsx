const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-slate-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold">KreatorKart</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Revolutionizing content monetization by connecting authentic creators with brands that value genuine engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                📸
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                💼
              </a>
            </div>
          </div>

          {/* For Creators */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Creators</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">How to Start</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browse Campaigns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creator Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* For Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Brands</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Launch Campaign</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Safety</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-2 text-slate-300">
                <p>📧 hello@kreatorkart.com</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 Bangalore, Karnataka, India</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-slate-300">
                <p>Monday - Friday: 9:00 AM - 7:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 KreatorKart. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;