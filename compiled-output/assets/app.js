// Compiled React application bundle
(function() {
  'use strict';

  // Simplified React-like implementation for demo
  const createElement = (tag, props, ...children) => {
    const element = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(key => {
        if (key === 'className') {
          element.className = props[key];
        } else if (key.startsWith('on')) {
          element.addEventListener(key.toLowerCase().substr(2), props[key]);
        } else {
          element.setAttribute(key, props[key]);
        }
      });
    }
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
    return element;
  };

  // State management
  let currentState = {
    isMenuOpen: false,
    currentRoute: window.location.pathname
  };

  const setState = (newState) => {
    currentState = { ...currentState, ...newState };
    render();
  };

  // Navigation component
  const Navigation = () => {
    const nav = createElement('nav', { 
      className: 'fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200' 
    });

    const container = createElement('div', { 
      className: 'container mx-auto px-4 lg:px-8' 
    });

    const navInner = createElement('div', { 
      className: 'flex items-center justify-between h-16' 
    });

    // Logo
    const logo = createElement('div', { className: 'flex items-center space-x-2' });
    const logoIcon = createElement('div', { 
      className: 'w-8 h-8 bg-gradient-to-br from-slate-900 to-slate-600 rounded-lg flex items-center justify-center' 
    });
    logoIcon.appendChild(createElement('span', { 
      className: 'text-white font-bold text-sm' 
    }, 'K'));
    const logoText = createElement('span', { 
      className: 'text-xl font-bold text-gray-900' 
    }, 'KreatorKart');
    logo.appendChild(logoIcon);
    logo.appendChild(logoText);

    // Desktop nav
    const desktopNav = createElement('div', { 
      className: 'hidden md:flex items-center space-x-8' 
    });
    ['How It Works', 'For Creators', 'For Brands', 'Campaigns'].forEach(item => {
      const link = createElement('a', {
        href: `#${item.toLowerCase().replace(' ', '-')}`,
        className: 'text-gray-600 hover:text-gray-900 transition-colors'
      }, item);
      desktopNav.appendChild(link);
    });

    // CTA buttons
    const ctaButtons = createElement('div', { 
      className: 'hidden md:flex items-center space-x-4' 
    });
    const walletBtn = createElement('button', {
      className: 'btn btn-outline bg-white border border-gray-200 text-gray-900 hover:bg-gray-50',
      onclick: () => window.location.href = '/wallet'
    }, '💰 Wallet');
    const loginBtn = createElement('button', {
      className: 'btn btn-ghost text-gray-600 hover:text-gray-900'
    }, 'Log In');
    const signupBtn = createElement('button', {
      className: 'btn btn-primary bg-slate-900 hover:bg-slate-800 text-white'
    }, 'Sign Up');
    
    ctaButtons.appendChild(walletBtn);
    ctaButtons.appendChild(loginBtn);
    ctaButtons.appendChild(signupBtn);

    // Mobile menu button
    const mobileMenuBtn = createElement('button', {
      className: 'md:hidden',
      onclick: () => setState({ isMenuOpen: !currentState.isMenuOpen })
    });
    const menuIcon = createElement('div', { 
      className: 'w-6 h-6 flex flex-col justify-center items-center' 
    });
    for (let i = 0; i < 3; i++) {
      const line = createElement('span', {
        className: `bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          currentState.isMenuOpen 
            ? (i === 0 ? 'rotate-45 translate-y-1' : i === 1 ? 'opacity-0' : '-rotate-45 -translate-y-1')
            : (i === 0 ? '-translate-y-0.5' : i === 2 ? 'translate-y-0.5' : 'my-0.5')
        }`
      });
      menuIcon.appendChild(line);
    }
    mobileMenuBtn.appendChild(menuIcon);

    navInner.appendChild(logo);
    navInner.appendChild(desktopNav);
    navInner.appendChild(ctaButtons);
    navInner.appendChild(mobileMenuBtn);

    // Mobile menu
    if (currentState.isMenuOpen) {
      const mobileMenu = createElement('div', { 
        className: 'md:hidden py-4 border-t border-gray-200' 
      });
      const mobileMenuInner = createElement('div', { 
        className: 'flex flex-col space-y-4' 
      });
      
      ['How It Works', 'For Creators', 'For Brands', 'Campaigns'].forEach(item => {
        const link = createElement('a', {
          href: `#${item.toLowerCase().replace(' ', '-')}`,
          className: 'text-gray-600 hover:text-gray-900 transition-colors'
        }, item);
        mobileMenuInner.appendChild(link);
      });

      const mobileCTA = createElement('div', { 
        className: 'flex flex-col space-y-2 pt-4' 
      });
      const mobileWalletBtn = createElement('button', {
        className: 'btn btn-outline bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 justify-start',
        onclick: () => window.location.href = '/wallet'
      }, '💰 Wallet');
      const mobileLoginBtn = createElement('button', {
        className: 'btn btn-ghost justify-start'
      }, 'Log In');
      const mobileSignupBtn = createElement('button', {
        className: 'btn btn-primary bg-slate-900 hover:bg-slate-800 text-white'
      }, 'Sign Up');
      
      mobileCTA.appendChild(mobileWalletBtn);
      mobileCTA.appendChild(mobileLoginBtn);
      mobileCTA.appendChild(mobileSignupBtn);
      mobileMenuInner.appendChild(mobileCTA);
      mobileMenu.appendChild(mobileMenuInner);
      container.appendChild(mobileMenu);
    }

    container.appendChild(navInner);
    nav.appendChild(container);
    return nav;
  };

  // Hero Section component
  const HeroSection = () => {
    const section = createElement('section', { 
      className: 'pt-24 pb-16 lg:pt-32 lg:pb-24' 
    });
    
    const container = createElement('div', { 
      className: 'container mx-auto px-4 lg:px-8' 
    });
    
    const grid = createElement('div', { 
      className: 'grid lg:grid-cols-2 gap-12 items-center' 
    });

    // Left column - Text content
    const leftCol = createElement('div', { className: 'space-y-8' });
    
    const textContent = createElement('div', { className: 'space-y-4' });
    const heading = createElement('h1', { 
      className: 'text-4xl lg:text-6xl font-bold text-gray-900 leading-tight' 
    });
    heading.innerHTML = 'Turn Attention into <span class="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Income</span>';
    
    const subheading = createElement('p', { 
      className: 'text-xl text-gray-600 leading-relaxed' 
    }, 'Create content. Get views. Get paid.');
    
    const description = createElement('p', { 
      className: 'text-lg text-gray-600' 
    }, 'Connect with brands, create authentic content, and earn based on real engagement. No follower requirements. Just genuine views.');
    
    textContent.appendChild(heading);
    textContent.appendChild(subheading);
    textContent.appendChild(description);

    // CTA buttons
    const ctaButtons = createElement('div', { 
      className: 'flex flex-col sm:flex-row gap-4' 
    });
    const startBtn = createElement('button', {
      className: 'btn btn-lg btn-primary bg-slate-900 hover:bg-slate-800 text-white'
    }, 'Start Earning →');
    const browseBtn = createElement('button', {
      className: 'btn btn-lg btn-outline border-slate-900 text-slate-900 hover:bg-slate-50'
    }, 'Browse Campaigns');
    
    ctaButtons.appendChild(startBtn);
    ctaButtons.appendChild(browseBtn);

    // Stats
    const stats = createElement('div', { 
      className: 'grid grid-cols-3 gap-8 pt-8' 
    });
    [
      { number: '10K+', label: 'Active Creators' },
      { number: '500+', label: 'Brand Partners' },
      { number: '₹2M+', label: 'Paid to Creators' }
    ].forEach(stat => {
      const statDiv = createElement('div', { className: 'text-center' });
      const number = createElement('div', { 
        className: 'text-2xl font-bold text-gray-900' 
      }, stat.number);
      const label = createElement('div', { 
        className: 'text-sm text-gray-600' 
      }, stat.label);
      statDiv.appendChild(number);
      statDiv.appendChild(label);
      stats.appendChild(statDiv);
    });

    leftCol.appendChild(textContent);
    leftCol.appendChild(ctaButtons);
    leftCol.appendChild(stats);

    // Right column - Visual mockup
    const rightCol = createElement('div', { className: 'relative' });
    const mockupContainer = createElement('div', { 
      className: 'relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl' 
    });
    
    const phoneMockup = createElement('div', { 
      className: 'bg-white rounded-xl shadow-lg p-4 max-w-xs mx-auto' 
    });
    
    const topBar = createElement('div', { 
      className: 'bg-gradient-to-r from-slate-900 to-slate-600 h-2 rounded-full mb-4' 
    });
    
    const contentArea = createElement('div', { className: 'space-y-3' });
    
    const userRow = createElement('div', { className: 'flex items-center space-x-3' });
    const avatar = createElement('div', { 
      className: 'w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-600 rounded-full' 
    });
    const userInfo = createElement('div', { className: 'flex-1' });
    const nameBar = createElement('div', { className: 'h-3 bg-slate-200 rounded mb-2' });
    const handleBar = createElement('div', { className: 'h-2 bg-slate-100 rounded w-2/3' });
    userInfo.appendChild(nameBar);
    userInfo.appendChild(handleBar);
    userRow.appendChild(avatar);
    userRow.appendChild(userInfo);
    
    const videoArea = createElement('div', { 
      className: 'h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg' 
    });
    
    const actionsRow = createElement('div', { 
      className: 'flex justify-between items-center' 
    });
    const actionBtns = createElement('div', { className: 'flex space-x-2' });
    for (let i = 0; i < 3; i++) {
      const btn = createElement('div', { className: 'w-6 h-6 bg-slate-200 rounded' });
      actionBtns.appendChild(btn);
    }
    const viewCount = createElement('div', { 
      className: 'text-sm font-semibold text-slate-900' 
    }, '1.2M views');
    actionsRow.appendChild(actionBtns);
    actionsRow.appendChild(viewCount);
    
    contentArea.appendChild(userRow);
    contentArea.appendChild(videoArea);
    contentArea.appendChild(actionsRow);
    
    phoneMockup.appendChild(topBar);
    phoneMockup.appendChild(contentArea);
    
    // Floating elements
    const earnedBadge = createElement('div', { 
      className: 'absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg' 
    }, '₹960 earned!');
    
    const viewsBadge = createElement('div', { 
      className: 'absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg' 
    }, 'Views rising ↗️');
    
    mockupContainer.appendChild(phoneMockup);
    mockupContainer.appendChild(earnedBadge);
    mockupContainer.appendChild(viewsBadge);
    rightCol.appendChild(mockupContainer);

    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    container.appendChild(grid);
    section.appendChild(container);
    
    return section;
  };

  // How It Works Section
  const HowItWorksSection = () => {
    const section = createElement('section', { 
      id: 'how-it-works',
      className: 'py-16 lg:py-24 bg-slate-50' 
    });
    
    const container = createElement('div', { 
      className: 'container mx-auto px-4 lg:px-8' 
    });
    
    const header = createElement('div', { className: 'text-center mb-16' });
    const title = createElement('h2', { 
      className: 'text-3xl lg:text-5xl font-bold text-gray-900 mb-4' 
    }, 'How It Works');
    const subtitle = createElement('p', { 
      className: 'text-xl text-gray-600 max-w-2xl mx-auto' 
    }, 'Simple, transparent, and results-driven. From campaign launch to creator payout in 5 easy steps.');
    
    header.appendChild(title);
    header.appendChild(subtitle);
    
    const stepsContainer = createElement('div', { 
      className: 'max-w-6xl mx-auto' 
    });
    
    const stepsGrid = createElement('div', { 
      className: 'grid md:grid-cols-5 gap-8' 
    });
    
    const steps = [
      { step: '1', title: 'Brands Launch Campaigns', description: 'Brands upload their brief, set payout per 1K views, and launch campaigns for authentic content creation.', icon: '🎯' },
      { step: '2', title: 'Creators Join & Create', description: 'Browse active campaigns, choose what resonates with you, and create engaging content that matches the brief.', icon: '🎨' },
      { step: '3', title: 'Post on Social Media', description: 'Share your content on Instagram, YouTube, X (Twitter), or other platforms to reach your audience.', icon: '📱' },
      { step: '4', title: 'KreatorKart Tracks Views', description: 'Our advanced system monitors real views and engagement across all platforms automatically.', icon: '📊' },
      { step: '5', title: 'Get Paid', description: 'Receive payments based on verified views. No follower count required - just genuine engagement.', icon: '💰' }
    ];
    
    steps.forEach((step, index) => {
      const stepDiv = createElement('div', { className: 'relative' });
      
      // Connector line
      if (index < steps.length - 1) {
        const connector = createElement('div', { 
          className: 'hidden md:block absolute top-12 left-full w-full h-0.5 bg-slate-200 z-0' 
        });
        const connectorDot = createElement('div', { 
          className: 'absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full' 
        });
        connector.appendChild(connectorDot);
        stepDiv.appendChild(connector);
      }
      
      const stepContent = createElement('div', { className: 'relative z-10 text-center' });
      
      // Step circle
      const stepCircle = createElement('div', { 
        className: 'mx-auto w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 border-4 border-slate-900/20' 
      });
      const stepIcon = createElement('div', { className: 'text-2xl' }, step.icon);
      stepCircle.appendChild(stepIcon);
      
      // Step number badge
      const stepBadge = createElement('div', { 
        className: 'absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold' 
      }, step.step);
      
      // Step text
      const stepTitle = createElement('h3', { 
        className: 'text-lg font-semibold text-gray-900 mb-2' 
      }, step.title);
      const stepDesc = createElement('p', { 
        className: 'text-sm text-gray-600 leading-relaxed' 
      }, step.description);
      
      stepContent.appendChild(stepCircle);
      stepContent.appendChild(stepBadge);
      stepContent.appendChild(stepTitle);
      stepContent.appendChild(stepDesc);
      stepDiv.appendChild(stepContent);
      stepsGrid.appendChild(stepDiv);
    });
    
    stepsContainer.appendChild(stepsGrid);
    container.appendChild(header);
    container.appendChild(stepsContainer);
    section.appendChild(container);
    
    return section;
  };

  // Main App
  const App = () => {
    const app = createElement('div', { className: 'min-h-screen bg-white' });
    
    if (currentState.currentRoute === '/wallet') {
      // Wallet page content would go here
      const walletPage = createElement('div', { className: 'pt-24 p-8' });
      const walletTitle = createElement('h1', { 
        className: 'text-3xl font-bold text-center text-gray-900' 
      }, 'Wallet Page');
      const walletDesc = createElement('p', { 
        className: 'text-center text-gray-600 mt-4' 
      }, 'Manage your earnings and payments');
      walletPage.appendChild(walletTitle);
      walletPage.appendChild(walletDesc);
      app.appendChild(Navigation());
      app.appendChild(walletPage);
    } else {
      // Home page
      app.appendChild(Navigation());
      app.appendChild(HeroSection());
      app.appendChild(HowItWorksSection());
    }
    
    return app;
  };

  // Render function
  const render = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(App());
  };

  // Handle routing
  window.addEventListener('popstate', () => {
    setState({ currentRoute: window.location.pathname });
  });

  // Initial render
  render();
})();