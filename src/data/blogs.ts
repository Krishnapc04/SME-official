export interface Blog {
  id: number;
  title: string;
  category: 'CDC Blogs' | 'Current Affairs' | 'Informative Blogs' | 'Achievements & Highlights';
  date: string;
  author: string;
  summary: string;
  image: string;
  content: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Top Career Opportunities in Metallurgical Engineering",
    category: "CDC Blogs",
    date: "March 10, 2024",
    author: "CDC Team",
    summary: "Explore the diverse career paths available for metallurgical engineers in today's industrial landscape, from research to management roles.",
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "The Department of Metallurgical and Materials Engineering boasts a legacy of around seven decades of pedagogy and research in metallurgy and materials engineering. Like most of the other similar programs around the globe, the department was founded with the aim of excelling in activities on mineral processing, extractive metallurgy, and mechanical metallurgy. Over the years, the department has established its forward-looking characteristics by diversifying into numerous areas like energy materials, biomaterials, ceramics & composites, electronic and magnetic materials, and computational modeling - an approach that has served as a template for the wider academic community throughout the country. We are a close-knit and vibrant community comprising undergraduate and postgraduate students, research scholars, Post-doctoral fellows, staff, and faculty members. The students find an academic ambiance conducive to their holistic development, where they enjoy a comprehensive curriculum involving a carefully crafted combination of foundational and state-of-the-art elective courses. The students also get to showcase their organizational and networking skills by holding events like 'COMPOSITE' and 'Research Scholar's Day', where fun meets learning. Considered among the best educational programs nationwide, the department is home to a network of alumni who excel as leaders in academic circles, the business sector, and entrepreneurial initiatives. As members of the academic community, we not only explore the fundamental aspects of materials engineering but also strive to fulfill our social commitments. To this end, we actively engage with national and global industries and extend our assistance by providing innovative solutions to their challenges. Our collaborators include renowned corporates and organizations such as Tata Steel, Vedanta Resources, SAIL, ISRO, DAE, DRDO, etc. Throughout our long history, the department has observed the rapidly changing landscape of academia and industry, and has consistently evolved accordingly. However, our primary focus has remained the same - contributing to nation-building through academic excellence, and we remain committed to producing the next generation of leaders in science, technology, education, and policy. this is about the department make it shorter within 30-40 words"
  },
  {
    id: 2,
    title: "India's Push Towards Green Steel Production",
    category: "Current Affairs",
    date: "March 8, 2024",
    author: "Priya Sharma",
    summary: "Analyzing India's ambitious plans to achieve carbon-neutral steel production by 2030 and its implications for the metallurgy sector.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: ""
  },
  {
    id: 3,
    title: "Understanding Phase Diagrams: A Beginner's Guide",
    category: "Informative Blogs",
    date: "March 6, 2024",
    author: "Dr. Rajesh Kumar",
    summary: "A comprehensive introduction to phase diagrams and their crucial role in materials science and engineering applications.",
    image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: ""
  },
  {
    id: 4,
    title: "SME Student Wins National Research Competition",
    category: "Achievements & Highlights",
    date: "March 4, 2024",
    author: "SME Team",
    summary: "Congratulating our student Ankit Verma for winning the National Materials Research Competition with his innovative work on biodegradable alloys.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: ""
  },
  {
    id: 5,
    title: "Preparing for Metallurgy Placements: A Complete Guide",
    category: "CDC Blogs",
    date: "March 2, 2024",
    author: "Placement Cell",
    summary: "Essential tips and strategies for students preparing for campus placements in metallurgical and materials engineering companies.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: ""
  },
  {
    id: 6,
    title: "Electric Vehicle Battery Materials: The Next Frontier",
    category: "Current Affairs",
    date: "February 28, 2024",
    author: "Prof. Meera Gupta",
    summary: "Exploring the latest developments in battery materials for electric vehicles and the role of metallurgical engineers in this revolution.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: ""
  },
  {
    id: 7,
    title: "Corrosion Protection Techniques in Marine Environment",
    category: "Informative Blogs",
    date: "February 26, 2024",
    author: "Dr. Suresh Chand",
    summary: "Detailed analysis of various corrosion protection methods used for materials exposed to harsh marine environments.",
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: ""
  },
  {
    id: 8,
    title: "Department Receives Excellence Award for Research",
    category: "Achievements & Highlights",
    date: "February 24, 2024",
    author: "News Team",
    summary: "Our department has been recognized with the National Excellence Award for outstanding contributions to materials research and innovation.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: ""
  },
]