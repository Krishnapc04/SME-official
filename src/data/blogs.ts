export interface Blog {
  id: number;
  title: string;
  category: 'CDC Blogs' | 'Current Affairs' | 'Informative Blogs' | 'Achievements & Highlights';
  date: string;
  author: string;
  summary: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Top Career Opportunities in Metallurgical Engineering",
    category: "CDC Blogs",
    date: "March 10, 2024",
    author: "CDC Team",
    summary: "Explore the diverse career paths available for metallurgical engineers in today's industrial landscape, from research to management roles.",
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "India's Push Towards Green Steel Production",
    category: "Current Affairs",
    date: "March 8, 2024",
    author: "Priya Sharma",
    summary: "Analyzing India's ambitious plans to achieve carbon-neutral steel production by 2030 and its implications for the metallurgy sector.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Understanding Phase Diagrams: A Beginner's Guide",
    category: "Informative Blogs",
    date: "March 6, 2024",
    author: "Dr. Rajesh Kumar",
    summary: "A comprehensive introduction to phase diagrams and their crucial role in materials science and engineering applications.",
    image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "SME Student Wins National Research Competition",
    category: "Achievements & Highlights",
    date: "March 4, 2024",
    author: "SME Team",
    summary: "Congratulating our student Ankit Verma for winning the National Materials Research Competition with his innovative work on biodegradable alloys.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    title: "Preparing for Metallurgy Placements: A Complete Guide",
    category: "CDC Blogs",
    date: "March 2, 2024",
    author: "Placement Cell",
    summary: "Essential tips and strategies for students preparing for campus placements in metallurgical and materials engineering companies.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    title: "Electric Vehicle Battery Materials: The Next Frontier",
    category: "Current Affairs",
    date: "February 28, 2024",
    author: "Prof. Meera Gupta",
    summary: "Exploring the latest developments in battery materials for electric vehicles and the role of metallurgical engineers in this revolution.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 7,
    title: "Corrosion Protection Techniques in Marine Environment",
    category: "Informative Blogs",
    date: "February 26, 2024",
    author: "Dr. Suresh Chand",
    summary: "Detailed analysis of various corrosion protection methods used for materials exposed to harsh marine environments.",
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 8,
    title: "Department Receives Excellence Award for Research",
    category: "Achievements & Highlights",
    date: "February 24, 2024",
    author: "News Team",
    summary: "Our department has been recognized with the National Excellence Award for outstanding contributions to materials research and innovation.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 9,
    title: "Internship Opportunities in Global Steel Companies",
    category: "CDC Blogs",
    date: "February 22, 2024",
    author: "Career Services",
    summary: "A comprehensive list of internship opportunities available at leading steel and metallurgy companies worldwide for our students.",
    image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 10,
    title: "Quantum Materials: Shaping the Future of Technology",
    category: "Informative Blogs",
    date: "February 20, 2024",
    author: "Dr. Priya Nair",
    summary: "An introduction to quantum materials and their potential applications in next-generation electronic and magnetic devices.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 11,
    title: "Alumni Spotlight: From IIT to Industry Leadership",
    category: "Achievements & Highlights",
    date: "February 18, 2024",
    author: "Alumni Relations",
    summary: "Featuring our distinguished alumnus who has risen to become the Chief Technology Officer at a leading global materials company.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 12,
    title: "Government's New Policy on Critical Minerals",
    category: "Current Affairs",
    date: "February 16, 2024",
    author: "Policy Analyst",
    summary: "Understanding the implications of India's new critical minerals policy and its impact on the metallurgical industry.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];