const XLSX = require('xlsx');
const path = require('path');

// Create workbook
const workbook = XLSX.utils.book_new();

// ============================================
// SHEET 1: Affiliate Application Tracker
// ============================================
const applicationTracker = [
  ['AFFILIATE APPLICATION TRACKER - AI Tools Directory'],
  [''],
  ['Tool Name', 'Network', 'Program URL', 'Commission', 'Type', 'Cookie Days', 'Min Payout', 'Date Applied', 'Status', 'Approval Date', 'My Affiliate Link', 'Notes'],
  [''],
  ['--- TIER 1 - HIGH PRIORITY ---', '', '', '', '', '', '', '', '', '', '', ''],
  ['Jasper AI', 'PartnerStack', 'https://jasper.ai/affiliate-program', '30%', 'Recurring', 30, '$50', '', 'Pending', '', '', '30% for 12 months'],
  ['Grammarly', 'ShareASale/CJ', 'https://grammarly.com/affiliate', '$25', 'One-time', 90, '$50', '', 'Pending', '', '', 'High conversion rate'],
  ['Canva', 'Impact/ShareASale', 'https://canva.com/affiliates', '$36', 'One-time', 30, '$50', '', 'Pending', '', '', 'Massive brand'],
  ['Surfer SEO', 'PartnerStack', 'https://surferseo.com/affiliate-program', '25%', 'Recurring', 60, '$100', '', 'Pending', '', '', 'Lifetime recurring'],
  ['Copy.ai', 'PartnerStack', 'https://copy.ai/affiliate-program', '45%', 'One-time', 60, '$50', '', 'Pending', '', '', 'Highest commission'],
  [''],
  ['--- TIER 2 - MEDIUM PRIORITY ---', '', '', '', '', '', '', '', '', '', '', ''],
  ['Notion', 'PartnerStack', 'https://notion.so/affiliates', '50%', 'One-time', 90, '$50', '', 'Pending', '', '', '50% first year'],
  ['ElevenLabs', 'PartnerStack', 'https://elevenlabs.io/affiliate', '25%', 'One-time', 30, '$50', '', 'Pending', '', '', 'Growing rapidly'],
  ['Synthesia', 'Direct', 'https://synthesia.io/affiliate-program', '20%', 'One-time', 60, '$100', '', 'Pending', '', '', 'High ticket B2B'],
  ['HeyGen', 'PartnerStack', 'https://heygen.com/affiliate', '20%', 'Recurring', 30, '$50', '', 'Pending', '', '', '12 months recurring'],
  ['Writesonic', 'Direct', 'https://writesonic.com/affiliate-program', '30%', 'Recurring', 30, '$50', '', 'Pending', '', '', 'Lifetime recurring'],
  [''],
  ['--- TIER 3 - ADDITIONAL ---', '', '', '', '', '', '', '', '', '', '', ''],
  ['Descript', 'Impact', 'https://descript.com/affiliate', '15%', 'One-time', 60, '$50', '', 'Pending', '', '', ''],
  ['Murf AI', 'Direct', 'https://murf.ai/affiliate-program', '20%', 'Recurring', 30, '$50', '', 'Pending', '', '', ''],
  ['Runway', 'Impact', 'https://runway.ml/affiliate', '15%', 'One-time', 30, '$50', '', 'Pending', '', '', ''],
  ['Frase', 'Direct', 'https://frase.io/affiliate', '30%', 'Recurring', 30, '$50', '', 'Pending', '', '', ''],
  ['Leonardo AI', 'Direct', 'https://leonardo.ai/affiliate-program', '20%', 'Recurring', 30, '$50', '', 'Pending', '', '', ''],
  ['Looka', 'ShareASale', 'https://looka.com/affiliate-program', '25%', 'One-time', 30, '$50', '', 'Pending', '', '', ''],
  ['Otter.ai', 'Direct', 'https://otter.ai/affiliate', '20%', 'One-time', 30, '$50', '', 'Pending', '', '', ''],
  [''],
  ['STATUS OPTIONS: Pending, Approved, Rejected, Under Review'],
];

const ws1 = XLSX.utils.aoa_to_sheet(applicationTracker);
ws1['!cols'] = [
  { wch: 15 }, { wch: 18 }, { wch: 40 }, { wch: 12 }, { wch: 12 },
  { wch: 12 }, { wch: 12 }, { wch: 14 }, { wch: 14 }, { wch: 14 },
  { wch: 45 }, { wch: 25 }
];
XLSX.utils.book_append_sheet(workbook, ws1, 'Application Tracker');

// ============================================
// SHEET 2: Network Account Info
// ============================================
const networkAccounts = [
  ['AFFILIATE NETWORK ACCOUNTS'],
  [''],
  ['Network', 'URL', 'Email Used', 'Username', 'Password Hint', 'Date Joined', 'Status', 'Payment Method', 'Payment Email', 'Notes'],
  [''],
  ['PartnerStack', 'https://partnerstack.com', '', '', '', '', 'Not Signed Up', 'PayPal', '', 'Jasper, Copy.ai, Surfer SEO, Notion, ElevenLabs, HeyGen'],
  ['Impact', 'https://impact.com', '', '', '', '', 'Not Signed Up', 'PayPal', '', 'Canva, Descript, Runway'],
  ['ShareASale', 'https://shareasale.com', '', '', '', '', 'Not Signed Up', 'PayPal', '', 'Grammarly, Looka'],
  ['CJ Affiliate', 'https://cj.com', '', '', '', '', 'Not Signed Up', 'PayPal', '', 'Grammarly alternative'],
  [''],
  ['REMINDERS:'],
  ['- Use a dedicated email for affiliate accounts'],
  ['- Enable 2FA where available'],
  ['- Keep payment info updated for timely payouts'],
  ['- Check each network\'s payout schedule (monthly/weekly)'],
];

const ws2 = XLSX.utils.aoa_to_sheet(networkAccounts);
ws2['!cols'] = [
  { wch: 15 }, { wch: 25 }, { wch: 25 }, { wch: 18 }, { wch: 18 },
  { wch: 14 }, { wch: 14 }, { wch: 15 }, { wch: 25 }, { wch: 45 }
];
XLSX.utils.book_append_sheet(workbook, ws2, 'Network Accounts');

// ============================================
// SHEET 3: Click & Conversion Tracking
// ============================================
const clickTracking = [
  ['CLICK & CONVERSION TRACKING LOG'],
  [''],
  ['Date', 'Tool', 'Click Type', 'Source Page', 'UTM Source', 'UTM Medium', 'UTM Campaign', 'IP Hash', 'Country', 'Converted', 'Revenue'],
  [''],
  ['EXAMPLE:'],
  ['2026-03-22', 'Jasper AI', 'Tool Card Click', 'Home Page', 'directory', 'organic', 'jasper_q1_2026', '', '', 'No', '$0'],
  ['2026-03-22', 'Grammarly', 'Featured Click', 'Writing Category', 'directory', 'organic', 'grammarly_main', '', '', 'Yes', '$25'],
  [''],
  ['TRACKING METHODS:'],
  ['1. Google Analytics 4 Events'],
  ['2. Custom click tracking API'],
  ['3. Affiliate network dashboards'],
  ['4. UTM parameters on all links'],
];

const ws3 = XLSX.utils.aoa_to_sheet(clickTracking);
ws3['!cols'] = [
  { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 20 }, { wch: 12 },
  { wch: 12 }, { wch: 20 }, { wch: 15 }, { wch: 12 }, { wch: 10 }, { wch: 10 }
];
XLSX.utils.book_append_sheet(workbook, ws3, 'Click Tracking');

// ============================================
// SHEET 4: Monthly Revenue Tracker
// ============================================
const revenueTracker = [
  ['MONTHLY REVENUE TRACKER'],
  [''],
  ['Month', 'Year', 'AdSense', 'Jasper', 'Grammarly', 'Canva', 'Surfer SEO', 'Copy.ai', 'Others', 'TOTAL', 'Notes'],
  [''],
  ['January', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['February', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['March', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['April', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['May', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['June', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['July', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['August', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['September', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['October', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['November', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  ['December', '2026', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  [''],
  ['YEAR TOTAL', '', '$0', '$0', '$0', '$0', '$0', '$0', '$0', '$0', ''],
  [''],
  ['GOALS:'],
  ['Q1 2026 Goal: $100/month'],
  ['Q2 2026 Goal: $500/month'],
  ['Q3 2026 Goal: $1,000/month'],
  ['Q4 2026 Goal: $2,000/month'],
];

const ws4 = XLSX.utils.aoa_to_sheet(revenueTracker);
ws4['!cols'] = [
  { wch: 12 }, { wch: 8 }, { wch: 10 }, { wch: 10 }, { wch: 12 },
  { wch: 10 }, { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 25 }
];
XLSX.utils.book_append_sheet(workbook, ws4, 'Revenue Tracker');

// ============================================
// SHEET 5: Affiliate Link Library
// ============================================
const linkLibrary = [
  ['AFFILIATE LINK LIBRARY'],
  [''],
  ['Tool Name', 'Default Link', 'Homepage Link', 'Category Page Link', 'Email Campaign Link', 'Social Media Link', 'UTM Template'],
  [''],
  ['Jasper AI', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=jasper'],
  ['Grammarly', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=grammarly'],
  ['Canva', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=canva'],
  ['Surfer SEO', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=surfer'],
  ['Copy.ai', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=copyai'],
  ['Notion', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=notion'],
  ['ElevenLabs', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=elevenlabs'],
  ['Synthesia', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=synthesia'],
  ['HeyGen', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=heygen'],
  ['Writesonic', '[YOUR LINK]', '', '', '', '', '?utm_source=directory&utm_medium=affiliate&utm_campaign=writesonic'],
  [''],
  ['UTM PARAMETER GUIDE:'],
  ['utm_source: Where the link is (directory, email, twitter, etc.)'],
  ['utm_medium: Type of traffic (affiliate, organic, paid, email)'],
  ['utm_campaign: Specific campaign name'],
  ['utm_content: A/B testing or specific placement'],
];

const ws5 = XLSX.utils.aoa_to_sheet(linkLibrary);
ws5['!cols'] = [
  { wch: 15 }, { wch: 40 }, { wch: 40 }, { wch: 40 }, { wch: 40 }, { wch: 40 }, { wch: 50 }
];
XLSX.utils.book_append_sheet(workbook, ws5, 'Link Library');

// ============================================
// SHEET 6: Application Checklist
// ============================================
const checklist = [
  ['AFFILIATE APPLICATION CHECKLIST'],
  [''],
  ['Step', 'Task', 'Status', 'Date Completed', 'Notes'],
  [''],
  ['PREPARATION', '', '', '', ''],
  ['1', 'Create dedicated affiliate email address', 'Pending', '', ''],
  ['2', 'Set up PayPal account for payments', 'Pending', '', ''],
  ['3', 'Prepare website stats (traffic, audience)', 'Pending', '', ''],
  ['4', 'Write promotional strategy document', 'Pending', '', ''],
  [''],
  ['NETWORK SIGNUP', '', '', '', ''],
  ['5', 'Sign up for PartnerStack', 'Pending', '', ''],
  ['6', 'Sign up for ShareASale', 'Pending', '', ''],
  ['7', 'Sign up for Impact', 'Pending', '', ''],
  ['8', 'Complete profile on each network', 'Pending', '', ''],
  [''],
  ['TIER 1 APPLICATIONS', '', '', '', ''],
  ['9', 'Apply to Jasper AI (PartnerStack)', 'Pending', '', ''],
  ['10', 'Apply to Grammarly (ShareASale)', 'Pending', '', ''],
  ['11', 'Apply to Canva (Impact)', 'Pending', '', ''],
  ['12', 'Apply to Surfer SEO (PartnerStack)', 'Pending', '', ''],
  ['13', 'Apply to Copy.ai (PartnerStack)', 'Pending', '', ''],
  [''],
  ['TIER 2 APPLICATIONS', '', '', '', ''],
  ['14', 'Apply to Notion (PartnerStack)', 'Pending', '', ''],
  ['15', 'Apply to ElevenLabs (PartnerStack)', 'Pending', '', ''],
  ['16', 'Apply to Synthesia (Direct)', 'Pending', '', ''],
  ['17', 'Apply to HeyGen (PartnerStack)', 'Pending', '', ''],
  ['18', 'Apply to Writesonic (Direct)', 'Pending', '', ''],
  [''],
  ['IMPLEMENTATION', '', '', '', ''],
  ['19', 'Update data.ts with affiliate links', 'Pending', '', ''],
  ['20', 'Add UTM tracking to all links', 'Pending', '', ''],
  ['21', 'Set up Google Analytics goals', 'Pending', '', ''],
  ['22', 'Create conversion tracking dashboard', 'Pending', '', ''],
  [''],
  ['STATUS OPTIONS: Pending, In Progress, Completed, Blocked'],
];

const ws6 = XLSX.utils.aoa_to_sheet(checklist);
ws6['!cols'] = [
  { wch: 8 }, { wch: 45 }, { wch: 15 }, { wch: 16 }, { wch: 35 }
];
XLSX.utils.book_append_sheet(workbook, ws6, 'Checklist');

// ============================================
// SHEET 7: Email Templates
// ============================================
const emailTemplates = [
  ['EMAIL TEMPLATES FOR AFFILIATE APPLICATIONS'],
  [''],
  ['TEMPLATE 1: STANDARD APPLICATION'],
  ['Subject: Affiliate Program Application - AI Tools Directory'],
  [''],
  ['Dear Affiliate Team,'],
  [''],
  ['I am writing to apply for your affiliate program. I operate the AI Tools Directory (https://ai-directory-tawny.vercel.app), a curated platform showcasing the best AI tools for creators, developers, and businesses.'],
  [''],
  ['ABOUT OUR PLATFORM:'],
  ['- Comprehensive directory of 50+ AI tools'],
  ['- Detailed reviews, comparisons, and guides'],
  ['- Growing organic traffic from targeted audience'],
  ['- Focus on tech professionals, creators, and businesses'],
  [''],
  ['OUR PROMOTION STRATEGY:'],
  ['- Feature your tool in relevant categories with detailed descriptions'],
  ['- Create dedicated review content and comparison articles'],
  ['- Social media promotion across Twitter/X and LinkedIn'],
  ['- Newsletter mentions to our growing subscriber base'],
  [''],
  ['We would love to partner with you and help drive quality signups to your platform. Please let me know if you need any additional information.'],
  [''],
  ['Best regards,'],
  ['[Your Name]'],
  ['AI Tools Directory'],
  ['https://ai-directory-tawny.vercel.app'],
  ['[Your Email]'],
  [''],
  ['---'],
  [''],
  ['TEMPLATE 2: FOLLOW-UP EMAIL (After 1 week)'],
  ['Subject: Following Up on Affiliate Application - AI Tools Directory'],
  [''],
  ['Hi [Name/Team],'],
  [''],
  ['I wanted to follow up on my affiliate program application submitted on [Date]. I\'m excited about the possibility of partnering with [Company Name] and promoting your tool to our audience.'],
  [''],
  ['Please let me know if you need any additional information about our platform or promotional strategy.'],
  [''],
  ['Best regards,'],
  ['[Your Name]'],
  ['AI Tools Directory'],
  [''],
  ['---'],
  [''],
  ['TEMPLATE 3: ACCEPTANCE RESPONSE'],
  ['Subject: Thank You - Affiliate Partnership Setup Complete'],
  [''],
  ['Dear [Name/Team],'],
  [''],
  ['Thank you for approving my application to the [Company Name] affiliate program! I\'m excited to start promoting your tool.'],
  [''],
  ['I have my affiliate link ready and will begin featuring [Product] prominently on AI Tools Directory. I\'ll also be creating dedicated content highlighting your tool\'s features and benefits.'],
  [''],
  ['Looking forward to a successful partnership!'],
  [''],
  ['Best regards,'],
  ['[Your Name]'],
];

const ws7 = XLSX.utils.aoa_to_sheet(emailTemplates);
ws7['!cols'] = [{ wch: 80 }];
XLSX.utils.book_append_sheet(workbook, ws7, 'Email Templates');

// Save the workbook
const outputPath = path.join(__dirname, '..', 'download', 'affiliate-tracking-spreadsheet.xlsx');
XLSX.writeFile(workbook, outputPath);

console.log('✅ Spreadsheet created successfully!');
console.log('📁 Location:', outputPath);
