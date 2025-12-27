
import { 
  Download, Type, BarChart3, Layout, Link2, Settings, Instagram, Music, 
  Image as ImageIcon, Video, Layers, Flame, Star, Zap, Smile, Hash, 
  Calculator, Crop, Palette, CheckCircle, Calendar, Trophy, Scissors,
  Eye, MousePointer, DollarSign, ShieldAlert, Maximize, Smartphone,
  Grid, Map, List, Clock, RefreshCcw, FileText, Search, User, TrendingUp,
  History, Monitor, UserCircle, Image, Globe, Share2, Filter, AlertTriangle,
  FileCheck, CalendarDays, Lock, Edit3, Fingerprint, QrCode
} from 'lucide-react';
import { ToolCategory, Tool } from './types';

export const TOOLS: Tool[] = [
  // --- DOWNLOADER TOOLS ---
  { 
    id: 'reels-dl', 
    name: 'Instagram Reels Downloader', 
    icon: 'Video', 
    category: ToolCategory.DOWNLOADER, 
    description: 'Download HD Reels with audio directly to your device.', 
    isViral: true,
    instructions: [
      'Open Instagram and find the Reel you want to download.',
      'Tap the three dots (...) or the Share icon and select "Copy Link".',
      'Paste the URL into the input field above.',
      'Click "Generate Result" and then "Download" your HD video.'
    ],
    proTips: 'Re-uploading high-quality Reels can help you trend, but always credit the original creator to avoid copyright strikes!'
  },
  { 
    id: 'video-dl', 
    name: 'Instagram Video Downloader', 
    icon: 'Download', 
    category: ToolCategory.DOWNLOADER, 
    description: 'Save any Instagram feed video in its original resolution.',
    instructions: [
      'Copy the link of the Instagram post containing the video.',
      'Paste the link in the box above.',
      'Hit the generate button to fetch the direct MP4 link.',
      'Save it to your gallery or computer.'
    ],
    proTips: 'Videos perform best when shared to your story first to build initial traction.'
  },
  { 
    id: 'photo-dl', 
    name: 'Instagram Photo Downloader', 
    icon: 'Image', 
    category: ToolCategory.DOWNLOADER, 
    description: 'Download high-quality IG photos without the screenshot blur.',
    instructions: [
      'Find the photo you want on Instagram.',
      'Copy the post URL from the browser bar or share menu.',
      'Paste it here to get the full-size image link.'
    ],
    proTips: 'Screenshots reduce quality by up to 40%. Using this tool preserves the 1080p crispness.'
  },
  { 
    id: 'carousel-dl', 
    name: 'Instagram Carousel Downloader', 
    icon: 'Layers', 
    category: ToolCategory.DOWNLOADER, 
    description: 'Save all slides from a carousel post in one go.',
    instructions: [
      'Copy the link of the carousel/swipe post.',
      'Paste it into the generator.',
      'We will extract every individual image and video for you.'
    ],
    proTips: 'Carousels are the best format for "Saveable" content. Studying high-performing carousels can help your strategy.'
  },
  { 
    id: 'story-dl', 
    name: 'Story Downloader (Public)', 
    icon: 'Flame', 
    category: ToolCategory.DOWNLOADER, 
    description: 'Save public stories before they expire in 24 hours.', 
    isViral: true,
    instructions: [
      'Enter the @username of the public account.',
      'Wait for the active stories to be fetched.',
      'Download the stories you want to keep forever.'
    ],
    proTips: 'Great for archiving your own brand collaborations or competitor research.'
  },
  { 
    id: 'audio-extractor', 
    name: 'Reel Audio (MP3) Extractor', 
    icon: 'Music', 
    category: ToolCategory.DOWNLOADER, 
    description: 'Convert trending Reels to high-quality MP3 for your own edits.', 
    isViral: true,
    instructions: [
      'Copy the Reel link with the audio you like.',
      'Paste it above to extract the sound.',
      'Download the MP3 file for use in your video editor.'
    ],
    proTips: 'Using "Trending Audio" is the #1 way to get more views on Instagram right now.'
  },

  // --- TEXT & BIO TOOLS ---
  { 
    id: 'bio-fonts', 
    name: 'Bio Font Generator', 
    icon: 'Type', 
    category: ToolCategory.TEXT, 
    description: 'Aesthetic Unicode fonts to make your profile stand out.', 
    isViral: true,
    instructions: [
      'Type your name or bio text in the input box.',
      'Browse through 20+ aesthetic font styles.',
      'Click the "Copy" icon next to your favorite style.',
      'Paste it into your Instagram profile settings.'
    ],
    proTips: 'Don\'t overdo it! Using too many weird fonts can make your bio hard to read for people with screen readers.'
  },
  { 
    id: 'caption-formatter', 
    name: 'Caption Formatter', 
    icon: 'Scissors', 
    category: ToolCategory.TEXT, 
    description: 'Clean line breaks and spacing for readable captions.',
    instructions: [
      'Write your caption exactly how you want it to look.',
      'Paste it here to add "invisible" characters that prevent Instagram from collapsing your spaces.',
      'Copy the processed text and paste into Instagram.'
    ],
    proTips: 'Readable captions with clear spacing increase average read time, which signals the algorithm to show your post to more people.'
  },
  { 
    id: 'hashtag-copy', 
    name: 'Hashtag Copy Tool', 
    icon: 'Hash', 
    category: ToolCategory.TEXT, 
    description: 'Quickly copy and clean groups of tags.',
    instructions: [
      'Paste your list of hashtags.',
      'Our tool will ensure they all have the # symbol and are separated correctly.',
      'Copy the optimized list for your post.'
    ],
    proTips: 'Instagram now recommends using only 3-5 highly relevant hashtags rather than 30 generic ones.'
  },

  // --- ANALYTICS CALCULATORS ---
  { 
    id: 'engagement-calc', 
    name: 'Engagement Rate Calculator', 
    icon: 'BarChart3', 
    category: ToolCategory.ANALYTICS, 
    description: 'Calculate your profile engagement rate to track growth.', 
    isViral: true,
    instructions: [
      'Enter your total follower count.',
      'Enter the average likes/comments from your last 10 posts.',
      'Calculate to see your percentage rate.'
    ],
    proTips: 'An engagement rate above 3% is considered good for accounts over 10k followers. Higher is better!'
  },
  { 
    id: 'earnings-est', 
    name: 'Creator Earnings Estimator', 
    icon: 'Calculator', 
    category: ToolCategory.ANALYTICS, 
    description: 'Estimate how much you should charge for brand deals.',
    instructions: [
      'Input your current follower count.',
      'Enter your average post reach if known.',
      'Get a suggested price range for a sponsored post or story.'
    ],
    proTips: 'This is just a baseline. High engagement or a very niche audience allows you to charge much more!'
  },
  { 
    id: 'shadowban-check', 
    name: 'Shadowban Self-Check', 
    icon: 'ShieldAlert', 
    category: ToolCategory.ANALYTICS, 
    description: 'A manual checklist to see if your reach is being restricted.',
    instructions: [
      'Review the signals on the result page.',
      'Check if your posts appear in hashtags for non-followers.',
      'Check your Account Status in IG settings.'
    ],
    proTips: 'Most "shadowbans" are actually just a dip in content quality or a change in the algorithm. Consistency is the cure.'
  },

  // --- DESIGN TOOLS ---
  { 
    id: 'safe-area', 
    name: 'Reel Safe Area Overlay', 
    icon: 'Smartphone', 
    category: ToolCategory.DESIGN, 
    description: 'See where the IG buttons will cover your video.', 
    isViral: true,
    instructions: [
      'View the "Safe Area" template.',
      'Ensure your captions and main subjects are in the center.',
      'Avoid placing text at the very top or bottom right.'
    ],
    proTips: 'Placing text behind the "Like" button or your username makes it impossible for viewers to read, causing them to scroll away faster.'
  },
  { 
    id: 'grid-preview', 
    name: 'Post Grid Preview', 
    icon: 'Grid', 
    category: ToolCategory.DESIGN, 
    description: 'Visualize how your next posts will look on your profile.',
    instructions: [
      'Upload or preview placeholders for your next 9 posts.',
      'Arrange them to see if your color palette matches.',
      'Plan your aesthetic before you hit publish.'
    ],
    proTips: 'A consistent "Grid Aesthetic" helps convert profile visitors into followers faster.'
  },

  // --- UTILITIES ---
  { 
    id: 'qr-generator', 
    name: 'Profile QR Generator', 
    icon: 'QrCode', 
    category: ToolCategory.UTILITIES, 
    description: 'Create a scan-to-follow code for your business card or bio.', 
    isViral: true,
    instructions: [
      'Enter your Instagram @username.',
      'Generate the unique QR code.',
      'Download and print it on stickers, menus, or cards.'
    ],
    proTips: 'Add your QR code to your physical products or store window to bridge the gap between offline and online.'
  },
  { 
    id: 'utm-builder', 
    name: 'UTM Link Builder', 
    icon: 'Link2', 
    category: ToolCategory.UTILITIES, 
    description: 'Track exactly how many clicks come from your IG bio.',
    instructions: [
      'Enter your website destination URL.',
      'Add source (instagram) and campaign names.',
      'Copy the long link and use a shortener (optional).'
    ],
    proTips: 'Google Analytics will now show you exactly which Instagram post or link led to a sale!'
  },

  // --- ADMIN TOOLS ---
  { 
    id: 'giveaway-picker', 
    name: 'Giveaway Winner Picker', 
    icon: 'Trophy', 
    category: ToolCategory.ADMIN, 
    description: 'Pick a random winner from your giveaway entries fairly.', 
    isViral: true,
    instructions: [
      'Enter the list of participants (one per line).',
      'Click "Generate Result".',
      'The system will randomly select a winner.'
    ],
    proTips: 'Record your screen while using this picker to show your followers that the giveaway was 100% fair.'
  },
  { 
    id: 'idea-spinner', 
    name: 'Content Idea Spinner', 
    icon: 'RefreshCcw', 
    category: ToolCategory.ADMIN, 
    description: 'Stuck? Spin for a viral content hook or idea.',
    instructions: [
      'Click the generate button.',
      'Receive a high-potential content idea.',
      'Adapt it to your specific niche.'
    ],
    proTips: 'Take the suggested idea and look at the "Top Posts" for that topic to see what style of video is currently trending.'
  },
  { 
    id: 'audit-checklist', 
    name: 'Account Audit Checklist', 
    icon: 'FileCheck', 
    category: ToolCategory.ADMIN, 
    description: 'A 6-step checklist to optimize your profile for growth.',
    instructions: [
      'Go through each item on the checklist.',
      'Update your profile settings based on the recommendations.',
      'Re-check every 30 days.'
    ],
    proTips: 'A "Clean" profile with a clear CTA (Call to Action) can double your follower conversion rate.'
  },

  // Mapping the remaining tools with basic info...
  { id: 'highlight-dl', name: 'Highlight Downloader', icon: 'Star', category: ToolCategory.DOWNLOADER, description: 'Save profile highlights easily.', instructions: ['Enter profile username.', 'Select the highlight cover to download the stories inside.'], proTips: 'Use this to study how top creators structure their "About Me" or "Service" highlights.' },
  { id: 'igtv-dl', name: 'IGTV Video Downloader', icon: 'Monitor', category: ToolCategory.DOWNLOADER, description: 'Download long-form IGTV content.', instructions: ['Copy IGTV link.', 'Paste and download.'], proTips: 'IGTV is now mostly merged with Videos, but old links still work here.' },
  { id: 'profile-pic-dl', name: 'Profile Picture Downloader (HD)', icon: 'UserCircle', category: ToolCategory.DOWNLOADER, description: 'View and save full-size DP.', instructions: ['Enter username.', 'Get the full resolution profile photo.'], proTips: 'Useful for verifying influencers before a partnership.' },
  { id: 'cover-photo-dl', name: 'Cover Photo Downloader', icon: 'Layout', category: ToolCategory.DOWNLOADER, description: 'Save Reel or Video covers.', instructions: ['Paste Reel link.', 'Extract only the cover image.'], proTips: 'Covers are vital for CTR (Click Through Rate) on the Explore page.' },
  { id: 'hashtag-limit', name: 'Hashtag Limit Checker', icon: 'Hash', category: ToolCategory.ADMIN, description: 'Check the 30-tag rule.', instructions: ['Paste your hashtags.', 'See the count instantly.'], proTips: 'If you go over 30, Instagram will post your caption with ZERO tags active.' },
  { id: 'duration-check', name: 'Reel Duration Checker', icon: 'Clock', category: ToolCategory.ADMIN, description: 'Check vs viral lengths.', instructions: ['Enter your video length.', 'See how it compares to viral averages.'], proTips: 'Videos under 15 seconds have the highest completion rates.' },
  { id: 'caption-template', name: 'Caption Template Gen', icon: 'FileText', category: ToolCategory.ADMIN, description: 'Proven viral structures.', instructions: ['Click to get a template.', 'Fill in the brackets with your info.'], proTips: 'The "Hook" (first line) is 80% of the reason people read a caption.' },
  { id: 'story-sequence', name: 'Story Sequence Planner', icon: 'Layers', category: ToolCategory.ADMIN, description: 'Map out your daily stories.', instructions: ['Follow the 5-part story arc strategy provided.'], proTips: 'Start with a poll to boost engagement for the rest of your story slides.' },
  { id: 'blocked-words', name: 'Blocked Word List', icon: 'Lock', category: ToolCategory.ADMIN, description: 'Suggested filtered words.', instructions: ['Copy the list of words.', 'Paste into Instagram > Privacy > Hidden Words.'], proTips: 'Keeping a clean comment section protects your brand reputation.' },
  { id: 'content-calendar', name: 'Content Calendar Gen', icon: 'CalendarDays', category: ToolCategory.ADMIN, description: 'Monthly post structure.', instructions: ['Get a weekly content theme breakdown.'], proTips: 'Theme days (e.g. Tutorial Tuesdays) help followers know what to expect from you.' },
  { id: 'image-resizer', name: 'Instagram Image Resizer', icon: 'Maximize', category: ToolCategory.DESIGN, description: 'Crop for Feed, Story, or Square.', instructions: ['Upload image.', 'Select format.', 'Download resized file.'], proTips: 'Use 4:5 for Feed posts to take up more vertical screen space.' },
  { id: 'aspect-ratio', name: 'Aspect Ratio Checker', icon: 'Smartphone', category: ToolCategory.DESIGN, description: 'Check 9:16 vs 4:5 status.', instructions: ['Enter dimensions (W x H).', 'Check if it fits IG standards.'], proTips: '9:16 is mandatory for Reels and Stories to avoid black bars.' },
  { id: 'carousel-split', name: 'Carousel Split Image', icon: 'Scissors', category: ToolCategory.DESIGN, description: 'Slice panoramas for posts.', instructions: ['Upload a wide image.', 'Split it into 2 or 3 perfect squares.'], proTips: 'Seamless panoramas encourage users to swipe, boosting engagement.' },
  { id: 'cover-crop', name: 'Reel Cover Crop Tool', icon: 'Crop', category: ToolCategory.DESIGN, description: 'Optimize thumbnail view.', instructions: ['See the 1:1 vs 9:16 preview.'], proTips: 'Always make sure your title text is visible in the 1:1 square crop for your grid.' },
  { id: 'story-resize', name: 'Story Image Resizer', icon: 'Layers', category: ToolCategory.DESIGN, description: 'Fix images for Story format.', instructions: ['Resize horizontal photos to 9:16.'], proTips: 'Avoid "zoom blur" by using high-res originals.' },
  { id: 'pfp-cropper', name: 'Profile Picture Cropper', icon: 'UserCircle', category: ToolCategory.DESIGN, description: 'Perfect circle crop.', instructions: ['Upload photo.', 'Adjust within the circle.', 'Download.'], proTips: 'Center your face and use a high-contrast background.' },
  { id: 'thumbnail-prev', name: 'Thumbnail Preview', icon: 'Image', category: ToolCategory.DESIGN, description: 'See how it looks on the grid.', instructions: ['Upload a thumbnail.', 'See it next to sample grid posts.'], proTips: 'Does it stand out or blend in too much?' },
  { id: 'feed-planner', name: 'Feed Aesthetic Planner', icon: 'Palette', category: ToolCategory.DESIGN, description: 'Static layout planning.', instructions: ['Upload 3-6 photos to see the pattern.'], proTips: 'Alternate between busy shots and minimal shots.' },
  { id: 'profile-url', name: 'Profile URL Generator', icon: 'Globe', category: ToolCategory.UTILITIES, description: 'Create direct profile links.', instructions: ['Enter @username.', 'Get link.'], proTips: 'Use this for your "Email Signature".' },
  { id: 'reel-link-ext', name: 'Reel Link Extractor', icon: 'Link2', category: ToolCategory.UTILITIES, description: 'Clean Reel share URLs.', instructions: ['Paste share link.', 'Get the clean direct link.'], proTips: 'Clean links are shorter and don\'t leak your user ID.' },
  { id: 'username-checker', name: 'Username Availability', icon: 'Search', category: ToolCategory.UTILITIES, description: 'Manual search shortcuts.', instructions: ['Enter name.', 'Check status.'], proTips: 'If taken, try adding ".co" or "the" at the start.' },
  { id: 'id-finder', name: 'Instagram ID Finder', icon: 'Search', category: ToolCategory.UTILITIES, description: 'Get ID from username.', instructions: ['Enter username.', 'Fetch unique numeric ID.'], proTips: 'Required for some 30th-party analytics apps.' },
  { id: 'link-cleaner', name: 'Bio Link Cleaner', icon: 'Filter', category: ToolCategory.UTILITIES, description: 'Remove tracking from URLs.', instructions: ['Paste tracked URL.', 'Get clean version.'], proTips: 'Privacy-focused users prefer clean links.' },
  { id: 'post-url-gen', name: 'Post URL Generator', icon: 'Link2', category: ToolCategory.UTILITIES, description: 'Link directly to specific posts.', instructions: ['Enter post ID.', 'Get link.'], proTips: 'Share specific high-value posts in your newsletter.' },
  { id: 'highlight-builder', name: 'Highlight Link Builder', icon: 'Star', category: ToolCategory.UTILITIES, description: 'Direct links to highlights.', instructions: ['Create link to specific highlight.'], proTips: 'Great for "Support" or "FAQ" links.' },
  { id: 'comment-link', name: 'Comment Link Generator', icon: 'Share2', category: ToolCategory.UTILITIES, description: 'Deep links to comments.', instructions: ['Link to a specific fan comment.'], proTips: 'Pinning a link to a great review in your bio can boost trust.' },
  { id: 'caption-preview', name: 'Caption Preview Tool', icon: 'Eye', category: ToolCategory.TEXT, description: 'See how it looks on a phone.', instructions: ['Paste caption.', 'See a simulated iPhone screen preview.'], proTips: 'The first 2 lines are all people see before they have to click "...more". Make them count!' },
  { id: 'bio-link-text', name: 'Bio Link Text Generator', icon: 'Link2', category: ToolCategory.TEXT, description: 'Create catchy CTA link text.', instructions: ['Type your offer.', 'Get catchy variations.'], proTips: '"Get 20% Off" is better than "Visit my site".' },
  { id: 'invisible-text', name: 'Invisible Text Generator', icon: 'Fingerprint', category: ToolCategory.TEXT, description: 'Spacing for bios & captions.', instructions: ['Click generate.', 'Copy the invisible character.'], proTips: 'Use this to create custom "About Me" spacing in your bio.' },
  { id: 'emoji-keyboard', name: 'Emoji Keyboard', icon: 'Smile', category: ToolCategory.TEXT, description: 'IG-popular emoji shortcuts.', instructions: ['Click any emoji to copy.'], proTips: 'Using emojis in the first 100 characters of a caption increases engagement.' },
  { id: 'text-case', name: 'Text Case Converter', icon: 'RefreshCcw', category: ToolCategory.TEXT, description: 'UPPER, lower, Title cases.', instructions: ['Enter text.', 'Pick case.'], proTips: 'UPPERCASE hooks are great for Reels, but Title Case is best for captions.' },
  { id: 'growth-rate', name: 'Follower Growth Rate', icon: 'TrendingUp', category: ToolCategory.ANALYTICS, description: 'Calculate percentage growth.', instructions: ['New followers / Old followers * 100.'], proTips: 'Steady 5% monthly growth is better than a 50% spike from a bot.' },
  { id: 'reach-estimator', name: 'Reach vs Engagement Estimator', icon: 'Eye', category: ToolCategory.ANALYTICS, description: 'Predicted reach patterns.', instructions: ['Enter views.', 'See expected like count.'], proTips: 'If your likes are 10% of your reach, you\'ve gone viral!' },
  { id: 'cpm-calc', name: 'CPM / CPC Calculator', icon: 'MousePointer', category: ToolCategory.ANALYTICS, description: 'Analyze ad costs.', instructions: ['Ad spend / impressions * 1000.'], proTips: 'Average IG CPM is around $8.00.' },
  { id: 'fake-follower', name: 'Fake Follower Checker', icon: 'AlertTriangle', category: ToolCategory.ANALYTICS, description: 'Ratio-based health check.', instructions: ['Look at follower-to-like ratio.'], proTips: 'Low engagement on high follower accounts usually means bought followers.' },
  { id: 'pricing-calc', name: 'Brand Deal Pricing', icon: 'DollarSign', category: ToolCategory.ANALYTICS, description: 'Custom sponsorship quotes.', instructions: ['Calculate based on reach.'], proTips: 'Always charge 20% more than your minimum to allow room for negotiation.' },
];

export const ICON_MAP: Record<string, any> = {
  Download, Type, BarChart3, Layout, Link2, Settings, Instagram, Music, ImageIcon, Video, Layers, Flame, Star, Zap, Smile, Hash, Calculator, Crop, Palette, CheckCircle, Calendar, Trophy, Scissors, Eye, MousePointer, DollarSign, ShieldAlert, Maximize, Smartphone, Grid, Map, List, Clock, RefreshCcw, FileText, Search, User, TrendingUp, History, Monitor, UserCircle, Image, Globe, Share2, Filter, AlertTriangle, FileCheck, CalendarDays, Lock, Edit3, Fingerprint, QrCode
};
