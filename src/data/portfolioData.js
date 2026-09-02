export const portfolioData = {
  profile: {
    name: 'Madita K.C.',
    initials: 'MK',
    role: 'Social Media Manager',
    headline: 'Crafting high-engagement digital strategies that turn brands into conversations.',
    leadBio:
      'Specializing in short-form content, influencer campaigns & performance-driven social media. I combine strategic thinking with creative execution to deliver engagement-first content systems that drive measurable results.',
    specialization: 'Short-form video, influencer campaigns & performance metrics',
    ratingQuote: 'Results-driven strategies grounded in audience research and algorithm insights.',
    ratingStars: 5,
    aboutTagline: 'Results-oriented strategy with a focus on engagement.',
    aboutParagraphs: [
      'I am a results-oriented Social Media Manager with hands-on experience building and executing digital strategies for leading brands. My work focuses on turning insights into high-engagement content systems—especially short-form video and platform-native storytelling—that drive awareness, consideration, and measurable business outcomes.',
      'I approach social media as a performance channel first, where every piece of content is designed with clear intent: hook attention, deliver value, and move audiences closer to action.',
    ],
    stats: [
      { value: '5+', label: 'Major brands' },
      { value: '45-day', label: 'Campaign cycles' },
      { value: 'Agency', label: 'Experience' },
    ],
    socialLinks: {
      videography: 'https://instagram.com/zee_ma._',
      personal: 'https://instagram.com/wmaditaa',
      email: 'maditakc103@gmail.com',
      linkedin: 'https://linkedin.com',
    },
    callToActionText: 'Ready for high-engagement content strategies?',
  },

  services: [
    {
      id: 's1',
      icon: '📊',
      title: 'Strategic Audits & Gap Analysis',
      description: 'Identifying why content underperforms and redesigning for algorithm-friendly engagement.',
      highlights: ['Content Pillar Mapping', 'Audience Research', 'Algorithm Performance Benchmarking'],
    },
    {
      id: 's2',
      icon: '🎬',
      title: 'Short-form Video Strategy',
      description: 'Concepting and structuring Reels/TikTok series that solve real-life problems and encourage shares & saves.',
      highlights: ['Hook Writing & Storyboarding', 'Viral Format Frameworks', 'Platform-Native Adaptations'],
    },
    {
      id: 's3',
      icon: '🤝',
      title: 'Influencer & Challenge Campaigns',
      description: 'Designing competitive, community-driven formats that generate organic reach and UGC.',
      highlights: ['Multi-Phase Campaign Design', 'Community Management', 'UGC Activation'],
    },
  ],

  projects: [
    {
      id: 'p1',
      title: 'Engagement-First Content Strategy',
      client: 'Kia Nepal',
      badge: 'Kia Nepal',
      category: 'Auto / Mobility',
      summary:
        'Marketing audit & platform-native strategy. Shifted from presence-first to engagement-first content with the "Kia Ready for Life" flagship reel series designed to solve real-life problems Nepali drivers face daily.',
      challenge:
        'Brand presence was static and focused solely on corporate specs, leading to low consumer resonance and stagnant organic engagement on Instagram & Facebook.',
      solution:
        'Pioneered the "Kia Ready for Life" flagship short-form video series addressing real commuter hurdles, vehicle handling in Nepal’s topography, and actionable lifestyle integration.',
      phases: [
        {
          phaseName: 'Phase 1: Content Audit & Persona Analysis',
          description: 'Analyzed audience pain points and top search queries regarding vehicle reliability in local terrain.',
        },
        {
          phaseName: 'Phase 2: "Kia Ready for Life" Reel Series',
          description: 'Produced problem-solving Reels focusing on monsoon driving, road-trip hacks, and safety features.',
        },
        {
          phaseName: 'Phase 3: Interactive Community Q&A',
          description: 'Created dynamic comment-to-reel follow-ups to maximize algorithm save & share signals.',
        },
      ],
      results: [
        '300%+ increase in average reel saves and shares',
        'Shifted audience sentiment from passive followers to active brand advocates',
        'Established high-performing benchmark templates for automotive social media in Nepal',
      ],
      platforms: ['Instagram Reels', 'Facebook Video', 'TikTok'],
      tags: ['Automotive', 'Short-form Video', 'Problem-Solving Series', 'Brand Repositioning'],
      metrics: [
        { label: 'Reel Shares/Saves', value: '+300%' },
        { label: 'Campaign Reach', value: '500K+' },
        { label: 'Engagement Rate', value: '8.4%' },
      ],
    },
    {
      id: 'p2',
      title: '45-Day TikTok Campaign',
      client: 'Hulas Foods',
      badge: 'Hulas Foods',
      category: 'FMCG / TikTok',
      summary:
        'Three-phase campaign: Plating Challenge → Funniest Hook Challenge → Sales Boost. Built awareness through competition, created daily viral potential through humor, and closed with commercial activation.',
      challenge:
        'Traditional heritage food brand needed to connect with younger Gen-Z and millennial cooking demographics without alienating traditional buyers.',
      solution:
        'Structured a phased 45-day TikTok campaign blending recipe aesthetics, humor-driven viral hooks, and competitive UGC giveaways.',
      phases: [
        {
          phaseName: 'Phase 1: The Plating Challenge',
          description: 'Encouraged foodies to create gourmet-style presentations using staple Hulas products.',
        },
        {
          phaseName: 'Phase 2: Funniest Hook Challenge',
          description: 'Partnered with micro-creators for comedic cooking fails and relatable kitchen scenarios.',
        },
        {
          phaseName: 'Phase 3: Commercial Activation & Sales Boost',
          description: 'Converted virality into supermarket footfall and ecommerce checkout discounts.',
        },
      ],
      results: [
        'Over 2M+ organic TikTok views across campaign hashtags',
        '1,200+ user-generated submissions during the challenge phase',
        'Measurable spike in retail pull across major grocery distributors',
      ],
      platforms: ['TikTok', 'Instagram UGC', 'Influencer Collabs'],
      tags: ['FMCG', 'TikTok Challenges', 'UGC Strategy', 'Influencer Activation'],
      metrics: [
        { label: 'Total Views', value: '2M+' },
        { label: 'UGC Submissions', value: '1.2K+' },
        { label: 'Duration', value: '45 Days' },
      ],
    },
    {
      id: 'p3',
      title: 'Bajaj & Red Bull Brand Activations',
      client: 'Clayway Communications (Agency)',
      badge: 'Multiple Brands',
      category: 'Lifestyle & Beverage',
      summary:
        'Motorcycle & mobility brand activations, high-energy lifestyle content aligned with global brand language adapted for the Nepali market under Clayway Communications.',
      challenge:
        'Adapting high-energy global beverage and two-wheeler brand guidelines to local youth culture and community riding events.',
      solution:
        'Crafted adrenaline-fueled event coverage, stunt showcase shorts, and interactive community challenges that celebrated local riders and athletes.',
      phases: [
        {
          phaseName: 'Phase 1: Localized Content Framework',
          description: 'Mapped global brand books into Nepali urban and adventure lifestyle themes.',
        },
        {
          phaseName: 'Phase 2: Event-Driven Real-time Coverage',
          description: 'Captured high-tempo reels and stories during on-ground riding festivals and student meetups.',
        },
        {
          phaseName: 'Phase 3: Creator Amplification',
          description: 'Coordinated with adventure vloggers and urban stunt riders for co-branded drops.',
        },
      ],
      results: [
        'Consistent top-tier engagement across competitive motorcycle segments',
        'High retention rates on video reels exceeding 15 seconds average watch time',
        'Seamless multi-brand execution under agency deadlines',
      ],
      platforms: ['Instagram', 'YouTube Shorts', 'Facebook'],
      tags: ['Mobility', 'Energy Drinks', 'Lifestyle Content', 'Event Activations'],
      metrics: [
        { label: 'Avg Watch Time', value: '>15s' },
        { label: 'Total Engagement', value: '350K+' },
        { label: 'Brand Alignment', value: '100%' },
      ],
    },
  ],

  skills: [
    {
      id: 'sk1',
      icon: '📋',
      title: 'Strategy',
      description: 'Content pillars, audience research, platform algorithm literacy, and performance reporting & KPI tracking.',
      items: ['Content Pillars', 'Audience Personas', 'Algorithm Literacy', 'KPI Dashboards & Analytics'],
    },
    {
      id: 'sk2',
      icon: '🎥',
      title: 'Content Creation',
      description: 'Short-form video concepts (Reels/TikTok), hook writing & storyboarding, cross-platform adaptation.',
      items: ['Short-form Concepts', 'Hook Writing & Storyboarding', 'Mobile Video Directing', 'Platform Adaptation'],
    },
    {
      id: 'sk3',
      icon: '📈',
      title: 'Campaigns',
      description: 'Influencer campaign design, challenge campaign phasing & sequencing, community management principles.',
      items: ['Influencer Sourcing & Briefs', 'Campaign Phasing', 'UGC Challenges', 'Community Management'],
    },
  ],

  testimonials: [
    {
      id: 't1',
      quote: 'A clear bias toward content that performs, not just content that looks good.',
      author: 'Performance Focus',
      role: 'Brand Metric Standard',
    },
    {
      id: 't2',
      quote:
        'Ability to translate brand problems into platform-native creative solutions with comfort working across strategy, concepting, and light creative direction.',
      author: 'Cross-functional Expertise',
      role: 'Creative & Analytical Strategy',
    },
  ],
};
