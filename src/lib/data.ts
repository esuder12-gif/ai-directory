// Static data for deployment (no database needed)
// This replaces Prisma for serverless deployment on Vercel

export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  pricing: 'FREE' | 'FREEMIUM' | 'PAID' | 'FREE_TRIAL' | 'OPEN_SOURCE';
  priceDetails?: string;
  isFeatured: boolean;
  viewCount: number;
  clickCount: number;
  upvoteCount: number;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  toolCount?: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'AI Writing',
    slug: 'ai-writing',
    description: 'AI-powered writing assistants, content generators, and copywriting tools',
    icon: 'pen',
    color: 'emerald',
    toolCount: 4,
  },
  {
    id: '2',
    name: 'AI Image',
    slug: 'ai-image',
    description: 'Image generation, editing, and enhancement tools powered by AI',
    icon: 'image',
    color: 'purple',
    toolCount: 3,
  },
  {
    id: '3',
    name: 'AI Video',
    slug: 'ai-video',
    description: 'Video creation, editing, and generation tools using AI',
    icon: 'video',
    color: 'rose',
    toolCount: 2,
  },
  {
    id: '4',
    name: 'AI Audio',
    slug: 'ai-audio',
    description: 'Text-to-speech, voice cloning, and audio generation tools',
    icon: 'mic',
    color: 'amber',
    toolCount: 2,
  },
  {
    id: '5',
    name: 'AI Chatbots',
    slug: 'ai-chatbots',
    description: 'Conversational AI, chatbot builders, and virtual assistants',
    icon: 'message',
    color: 'blue',
    toolCount: 1,
  },
  {
    id: '6',
    name: 'AI Coding',
    slug: 'ai-coding',
    description: 'Code generation, debugging, and developer productivity tools',
    icon: 'code',
    color: 'cyan',
    toolCount: 2,
  },
  {
    id: '7',
    name: 'AI Marketing',
    slug: 'ai-marketing',
    description: 'Marketing automation, SEO tools, and campaign optimizers',
    icon: 'megaphone',
    color: 'orange',
    toolCount: 1,
  },
  {
    id: '8',
    name: 'AI Productivity',
    slug: 'ai-productivity',
    description: 'Task automation, workflow tools, and productivity boosters',
    icon: 'zap',
    color: 'indigo',
    toolCount: 2,
  },
];

export const tools: Tool[] = [
  // AI Writing
  {
    id: '1',
    name: 'ChatGPT',
    slug: 'chatgpt',
    tagline: 'The most powerful AI assistant for conversations and writing',
    description: 'ChatGPT is an advanced AI language model by OpenAI that can engage in natural conversations, help with writing, coding, analysis, and much more. It\'s the gold standard for AI assistants and can handle complex tasks with remarkable accuracy.',
    websiteUrl: 'https://chat.openai.com',
    pricing: 'FREEMIUM',
    priceDetails: 'Free / $20/month for Plus',
    isFeatured: true,
    viewCount: 15420,
    clickCount: 8932,
    upvoteCount: 2341,
    category: categories[0],
  },
  {
    id: '2',
    name: 'Claude',
    slug: 'claude',
    tagline: 'Anthropic\'s AI assistant for safe, helpful conversations',
    description: 'Claude is an AI assistant developed by Anthropic, designed to be helpful, harmless, and honest. It excels at thoughtful analysis, writing, coding, and can handle very long documents with its 200K context window.',
    websiteUrl: 'https://claude.ai',
    pricing: 'FREEMIUM',
    priceDetails: 'Free / $20/month for Pro',
    isFeatured: true,
    viewCount: 12350,
    clickCount: 7821,
    upvoteCount: 1987,
    category: categories[0],
  },
  {
    id: '3',
    name: 'Jasper AI',
    slug: 'jasper-ai',
    tagline: 'AI content generation for marketing teams',
    description: 'Jasper is an AI writing tool specifically designed for marketers and content creators. It can generate blog posts, social media content, ad copy, and more with over 50 templates to choose from.',
    websiteUrl: 'https://jasper.ai',
    pricing: 'PAID',
    priceDetails: 'From $39/month',
    isFeatured: false,
    viewCount: 8920,
    clickCount: 4532,
    upvoteCount: 876,
    category: categories[0],
  },
  {
    id: '4',
    name: 'Copy.ai',
    slug: 'copy-ai',
    tagline: 'Generate marketing copy in seconds',
    description: 'Copy.ai uses AI to help you create marketing copy, blog posts, social media content, and more. Perfect for businesses looking to scale their content production.',
    websiteUrl: 'https://copy.ai',
    pricing: 'FREEMIUM',
    priceDetails: 'Free / $36/month',
    isFeatured: false,
    viewCount: 6540,
    clickCount: 3210,
    upvoteCount: 543,
    category: categories[0],
  },
  // AI Image
  {
    id: '5',
    name: 'Midjourney',
    slug: 'midjourney',
    tagline: 'Create stunning AI art with text prompts',
    description: 'Midjourney is a generative AI tool that creates beautiful images from text descriptions. It\'s known for its artistic style and high-quality output, making it a favorite among artists and designers.',
    websiteUrl: 'https://midjourney.com',
    pricing: 'PAID',
    priceDetails: 'From $10/month',
    isFeatured: true,
    viewCount: 18230,
    clickCount: 10234,
    upvoteCount: 3542,
    category: categories[1],
  },
  {
    id: '6',
    name: 'DALL-E 3',
    slug: 'dall-e-3',
    tagline: 'OpenAI\'s advanced image generation model',
    description: 'DALL-E 3 is OpenAI\'s latest image generation model that can create highly detailed and accurate images from text descriptions. It integrates seamlessly with ChatGPT for enhanced prompting.',
    websiteUrl: 'https://openai.com/dall-e-3',
    pricing: 'FREEMIUM',
    priceDetails: 'Credits-based pricing',
    isFeatured: false,
    viewCount: 14560,
    clickCount: 8765,
    upvoteCount: 2134,
    category: categories[1],
  },
  {
    id: '7',
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    tagline: 'Open-source AI image generation',
    description: 'Stable Diffusion is an open-source AI image generation model that can be run locally or through various services. It offers incredible flexibility and customization for developers and artists.',
    websiteUrl: 'https://stability.ai',
    pricing: 'OPEN_SOURCE',
    priceDetails: 'Free / Cloud credits',
    isFeatured: false,
    viewCount: 12340,
    clickCount: 6543,
    upvoteCount: 1876,
    category: categories[1],
  },
  // AI Video
  {
    id: '8',
    name: 'Runway',
    slug: 'runway',
    tagline: 'AI-powered video creation and editing',
    description: 'Runway is a suite of AI tools for video creation and editing. Features include text-to-video generation, video editing, background removal, and more. Perfect for content creators and filmmakers.',
    websiteUrl: 'https://runway.ml',
    pricing: 'FREEMIUM',
    priceDetails: 'Free / $12/month',
    isFeatured: false,
    viewCount: 9870,
    clickCount: 5432,
    upvoteCount: 1234,
    category: categories[2],
  },
  {
    id: '9',
    name: 'Synthesia',
    slug: 'synthesia',
    tagline: 'Create AI videos with virtual avatars',
    description: 'Synthesia allows you to create professional videos with AI avatars. Just type your script and choose an avatar to generate engaging video content in minutes.',
    websiteUrl: 'https://synthesia.io',
    pricing: 'PAID',
    priceDetails: 'From $22/month',
    isFeatured: false,
    viewCount: 7650,
    clickCount: 4123,
    upvoteCount: 876,
    category: categories[2],
  },
  // AI Audio
  {
    id: '10',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    tagline: 'Realistic AI voice generation and cloning',
    description: 'ElevenLabs offers state-of-the-art AI voice synthesis. Create realistic voiceovers, clone voices, or generate speech in multiple languages with incredible quality.',
    websiteUrl: 'https://elevenlabs.io',
    pricing: 'FREEMIUM',
    priceDetails: 'Free / $5/month',
    isFeatured: true,
    viewCount: 11230,
    clickCount: 6789,
    upvoteCount: 1654,
    category: categories[3],
  },
  {
    id: '11',
    name: 'Murf AI',
    slug: 'murf-ai',
    tagline: 'Professional AI voiceovers for any project',
    description: 'Murf AI provides studio-quality AI voiceovers with over 120 voices in 20+ languages. Perfect for videos, podcasts, e-learning, and more.',
    websiteUrl: 'https://murf.ai',
    pricing: 'FREEMIUM',
    priceDetails: 'Free / $19/month',
    isFeatured: false,
    viewCount: 5430,
    clickCount: 2345,
    upvoteCount: 432,
    category: categories[3],
  },
  // AI Coding
  {
    id: '12',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    tagline: 'Your AI pair programmer',
    description: 'GitHub Copilot is an AI coding assistant that helps you write code faster. It suggests whole lines or entire functions based on context and can be integrated with popular IDEs.',
    websiteUrl: 'https://github.com/features/copilot',
    pricing: 'PAID',
    priceDetails: '$10/month',
    isFeatured: false,
    viewCount: 14560,
    clickCount: 8234,
    upvoteCount: 2345,
    category: categories[5],
  },
  {
    id: '13',
    name: 'Cursor',
    slug: 'cursor',
    tagline: 'The AI-first code editor',
    description: 'Cursor is an AI-powered code editor built for pair programming with AI. It features intelligent code completion, chat-based editing, and can understand your entire codebase.',
    websiteUrl: 'https://cursor.sh',
    pricing: 'FREEMIUM',
    priceDetails: 'Free / $20/month',
    isFeatured: true,
    viewCount: 8920,
    clickCount: 5432,
    upvoteCount: 1234,
    category: categories[5],
  },
  // AI Chatbots
  {
    id: '14',
    name: 'Intercom Fin',
    slug: 'intercom-fin',
    tagline: 'AI-powered customer support bot',
    description: 'Intercom Fin is an AI customer service bot that resolves customer issues instantly using your knowledge base. It integrates seamlessly with Intercom\'s platform.',
    websiteUrl: 'https://intercom.com/fin',
    pricing: 'PAID',
    priceDetails: 'Custom pricing',
    isFeatured: false,
    viewCount: 4320,
    clickCount: 2134,
    upvoteCount: 321,
    category: categories[4],
  },
  // AI Marketing
  {
    id: '15',
    name: 'Surfer SEO',
    slug: 'surfer-seo',
    tagline: 'AI-powered SEO content optimization',
    description: 'Surfer SEO uses AI to help you create SEO-optimized content. Analyze top-ranking pages, get content suggestions, and optimize your articles for better search rankings.',
    websiteUrl: 'https://surferseo.com',
    pricing: 'PAID',
    priceDetails: 'From $89/month',
    isFeatured: false,
    viewCount: 6540,
    clickCount: 3210,
    upvoteCount: 543,
    category: categories[6],
  },
  // AI Productivity
  {
    id: '16',
    name: 'Notion AI',
    slug: 'notion-ai',
    tagline: 'AI writing assistant built into Notion',
    description: 'Notion AI brings the power of AI directly into your Notion workspace. Summarize notes, generate content, translate text, and more without leaving your workflow.',
    websiteUrl: 'https://notion.so/product/ai',
    pricing: 'PAID',
    priceDetails: '$10/month add-on',
    isFeatured: false,
    viewCount: 9870,
    clickCount: 5432,
    upvoteCount: 1234,
    category: categories[7],
  },
  {
    id: '17',
    name: 'Otter.ai',
    slug: 'otter-ai',
    tagline: 'AI meeting transcription and notes',
    description: 'Otter.ai automatically transcribes meetings, generates notes, and captures action items. Never miss important details from your meetings again.',
    websiteUrl: 'https://otter.ai',
    pricing: 'FREEMIUM',
    priceDetails: 'Free / $16.99/month',
    isFeatured: false,
    viewCount: 7650,
    clickCount: 4123,
    upvoteCount: 876,
    category: categories[7],
  },
];

// Helper functions
export function getTools(options?: {
  category?: string;
  search?: string;
  featured?: boolean;
  limit?: number;
}) {
  let result = [...tools];

  if (options?.category) {
    result = result.filter(t => t.category.slug === options.category);
  }

  if (options?.search) {
    const search = options.search.toLowerCase();
    result = result.filter(t =>
      t.name.toLowerCase().includes(search) ||
      t.tagline.toLowerCase().includes(search) ||
      t.description.toLowerCase().includes(search)
    );
  }

  if (options?.featured) {
    result = result.filter(t => t.isFeatured);
  }

  if (options?.limit) {
    result = result.slice(0, options.limit);
  }

  return result;
}

export function getToolBySlug(slug: string) {
  return tools.find(t => t.slug === slug);
}

export function getCategories() {
  return categories;
}

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}

// Affiliate Program Interface
export interface AffiliateProgram {
  toolId: string;
  toolName: string;
  programUrl: string;
  network: string;
  commission: string;
  commissionType: 'recurring' | 'one-time' | 'hybrid';
  cookieDays: number;
  minPayout: string;
  paymentMethods: string[];
  estimatedEarnings: string;
  difficulty: 'easy' | 'medium' | 'hard';
  notes: string;
  priority: number;
}

// Affiliate Programs Data
export const affiliatePrograms: AffiliateProgram[] = [
  // Tier 1 - High Priority
  {
    toolId: 'jasper',
    toolName: 'Jasper AI',
    programUrl: 'https://jasper.ai/affiliate-program',
    network: 'PartnerStack',
    commission: '30%',
    commissionType: 'recurring',
    cookieDays: 30,
    minPayout: '$50',
    paymentMethods: ['PayPal', 'Bank Transfer'],
    estimatedEarnings: '$15-45/month per referral',
    difficulty: 'easy',
    notes: '30% recurring for 12 months. High conversion rate.',
    priority: 1
  },
  {
    toolId: 'grammarly',
    toolName: 'Grammarly',
    programUrl: 'https://grammarly.com/affiliate',
    network: 'ShareASale/CJ',
    commission: '$25',
    commissionType: 'one-time',
    cookieDays: 90,
    minPayout: '$50',
    paymentMethods: ['PayPal', 'Check', 'Direct Deposit'],
    estimatedEarnings: '$25 per premium signup',
    difficulty: 'easy',
    notes: 'Massive brand recognition. Very high conversion rate.',
    priority: 1
  },
  {
    toolId: 'canva',
    toolName: 'Canva',
    programUrl: 'https://canva.com/affiliates',
    network: 'Impact/ShareASale',
    commission: '$36',
    commissionType: 'one-time',
    cookieDays: 30,
    minPayout: '$50',
    paymentMethods: ['PayPal', 'Bank Transfer'],
    estimatedEarnings: '$36 per Pro signup',
    difficulty: 'easy',
    notes: 'Huge market. Very reliable payments.',
    priority: 1
  },
  {
    toolId: 'surfer-seo',
    toolName: 'Surfer SEO',
    programUrl: 'https://surferseo.com/affiliate-program',
    network: 'PartnerStack',
    commission: '25%',
    commissionType: 'recurring',
    cookieDays: 60,
    minPayout: '$100',
    paymentMethods: ['PayPal'],
    estimatedEarnings: '$22-60/month per referral',
    difficulty: 'medium',
    notes: 'Lifetime recurring! High ticket pricing.',
    priority: 1
  },
  {
    toolId: 'copy-ai',
    toolName: 'Copy.ai',
    programUrl: 'https://copy.ai/affiliate-program',
    network: 'PartnerStack',
    commission: '45%',
    commissionType: 'one-time',
    cookieDays: 60,
    minPayout: '$50',
    paymentMethods: ['PayPal'],
    estimatedEarnings: '$16-65 per referral',
    difficulty: 'easy',
    notes: 'Highest commission rate!',
    priority: 1
  },
  // Tier 2 - Medium Priority
  {
    toolId: 'notion',
    toolName: 'Notion',
    programUrl: 'https://notion.so/affiliates',
    network: 'PartnerStack',
    commission: '50%',
    commissionType: 'one-time',
    cookieDays: 90,
    minPayout: '$50',
    paymentMethods: ['PayPal'],
    estimatedEarnings: '$4-8 per referral',
    difficulty: 'medium',
    notes: '50% of first year.',
    priority: 2
  },
  {
    toolId: 'elevenlabs',
    toolName: 'ElevenLabs',
    programUrl: 'https://elevenlabs.io/affiliate',
    network: 'PartnerStack',
    commission: '25%',
    commissionType: 'one-time',
    cookieDays: 30,
    minPayout: '$50',
    paymentMethods: ['PayPal'],
    estimatedEarnings: '$5-55 per referral',
    difficulty: 'medium',
    notes: 'Hot AI audio tool.',
    priority: 2
  },
  {
    toolId: 'synthesia',
    toolName: 'Synthesia',
    programUrl: 'https://synthesia.io/affiliate-program',
    network: 'Direct',
    commission: '20%',
    commissionType: 'one-time',
    cookieDays: 60,
    minPayout: '$100',
    paymentMethods: ['PayPal', 'Bank Transfer'],
    estimatedEarnings: '$44-88 per referral',
    difficulty: 'medium',
    notes: 'High ticket B2B tool.',
    priority: 2
  },
  {
    toolId: 'heygen',
    toolName: 'HeyGen',
    programUrl: 'https://heygen.com/affiliate',
    network: 'PartnerStack',
    commission: '20%',
    commissionType: 'recurring',
    cookieDays: 30,
    minPayout: '$50',
    paymentMethods: ['PayPal'],
    estimatedEarnings: '$12-48/month per referral',
    difficulty: 'medium',
    notes: '12 months recurring.',
    priority: 2
  },
  {
    toolId: 'writesonic',
    toolName: 'Writesonic',
    programUrl: 'https://writesonic.com/affiliate-program',
    network: 'Direct',
    commission: '30%',
    commissionType: 'recurring',
    cookieDays: 30,
    minPayout: '$50',
    paymentMethods: ['PayPal'],
    estimatedEarnings: '$6-30/month per referral',
    difficulty: 'easy',
    notes: 'Lifetime recurring!',
    priority: 2
  },
];

// Affiliate Networks
export const affiliateNetworks = [
  {
    name: 'PartnerStack',
    url: 'https://partnerstack.com',
    tools: ['Jasper AI', 'Copy.ai', 'Surfer SEO', 'Notion', 'ElevenLabs', 'HeyGen'],
    benefits: ['Single dashboard', 'Real-time tracking', 'Reliable payments', 'Monthly payouts'],
    recommended: true
  },
  {
    name: 'Impact',
    url: 'https://impact.com',
    tools: ['Canva', 'Descript', 'Runway'],
    benefits: ['Premium brands', 'Detailed analytics', 'Flexible payments'],
    recommended: true
  },
  {
    name: 'ShareASale',
    url: 'https://shareasale.com',
    tools: ['Grammarly', 'Looka'],
    benefits: ['20+ years experience', 'Reliable payments', 'Wide variety of merchants'],
    recommended: true
  },
  {
    name: 'CJ Affiliate',
    url: 'https://cj.com',
    tools: ['Grammarly'],
    benefits: ['Premium brands', 'High payouts', 'Professional support'],
    recommended: false
  },
];
