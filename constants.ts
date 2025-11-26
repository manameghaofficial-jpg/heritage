import { Product, Video, BlogPost } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Quantum Data Core',
    price: 1299.99,
    category: 'Technology',
    image: 'https://picsum.photos/seed/tech1/400/400',
    description: 'Advanced storage unit using quantum entanglement.',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Neural Interface V2',
    price: 899.50,
    category: 'Research',
    image: 'https://picsum.photos/seed/tech2/400/400',
    description: 'Direct brain-computer interface for enhanced learning.',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Holographic Display',
    price: 450.00,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/tech3/400/400',
    description: '3D projection system for immersive visualization.',
    rating: 4.5
  },
  {
    id: '4',
    name: 'Ancient Star Map',
    price: 120.00,
    category: 'Heritage',
    image: 'https://picsum.photos/seed/space1/400/400',
    description: 'Replica of ancient astronomical charts.',
    rating: 4.7
  }
];

export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'The Future of AI in Heritage',
    thumbnail: 'https://picsum.photos/seed/vid1/600/340',
    views: 12500,
    duration: '14:20',
    category: 'Documentary',
    description: 'Exploring how AI preserves ancient history.',
    channel: 'Sharshi Labs'
  },
  {
    id: '2',
    title: 'Quantum Computing Explained',
    thumbnail: 'https://picsum.photos/seed/vid2/600/340',
    views: 8900,
    duration: '10:05',
    category: 'Education',
    description: 'Basics of quantum mechanics for beginners.',
    channel: 'Tech Forward'
  },
  {
    id: '3',
    title: 'Neon City Walkthrough',
    thumbnail: 'https://picsum.photos/seed/vid3/600/340',
    views: 45000,
    duration: '1:02:30',
    category: 'Lifestyle',
    description: 'Ambient 4K walk through a cyberpunk city.',
    channel: 'Future Vibe'
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'Bridging Ancient Wisdom and Modern Tech',
    excerpt: 'How we are using machine learning to decode lost languages.',
    content: 'Full article content would go here...',
    author: 'Dr. A. Vance',
    date: '2023-10-15',
    image: 'https://picsum.photos/seed/blog1/800/400',
    category: 'Research'
  },
  {
    id: '2',
    title: 'The Rise of Commercial Space Travel',
    excerpt: 'What the next decade looks like for orbital tourism.',
    content: 'Full article content...',
    author: 'J. Rocket',
    date: '2023-11-02',
    image: 'https://picsum.photos/seed/blog2/800/400',
    category: 'Future'
  }
];
