export interface Blog {
  id: number;
  title: string;
  category: 'CDC Blogs' | 'COMPOSIT Blogs' | 'Achievements & Highlights';
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
    image: "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/08/17064425/Portfolio-Career.png",
    content: "Metallurgical Engineering presents a wide range of career opportunities both in India and internationally, spanning industries, research, and academia. In India, metallurgists are employed in core sectors such as steel, mining, and manufacturing with companies like Tata Steel, SAIL, JSW, Hindalco, and Vedanta, as well as in public sector undertakings and government organizations including ISRO, BARC, DRDO, and IOCL, often through competitive exams like GATE. The private sector also offers roles in automotive, aerospace, electronics, and defense manufacturing, where metallurgists work in areas such as process engineering, quality control, product development, and failure analysis. Research and academic positions are available at IITs, NITs, IISc, and CSIR labs, with growing interest in emerging fields like energy materials, biomaterials, and additive manufacturing. Internationally, opportunities exist in both industry and academia, with graduates pursuing higher studies and jobs in countries like the USA, Germany, Canada, and Australia in top universities and global companies such as Boeing, ArcelorMittal, and Shell. These roles often require specialization in areas like corrosion engineering, materials informatics, sustainable metallurgy, and advanced manufacturing. Certifications such as PE, P.Eng, or CEng may be needed depending on the country. With strong technical knowledge, hands-on skills, research exposure, and familiarity with computational tools and global standards, metallurgical engineers can build rewarding careers contributing to advancements in aerospace, renewable energy, medical devices, and beyond."
  },
  {
    id: 2,
    title: "When Enthusiasm Overflows: The Bittersweet Surge in COMPOSIT 2025 Participation",
    category: "COMPOSIT Blogs",
    date: "March 25, 2025",
    author: "COMPOSIT Team",
    summary: "COMPOSIT 2025 witnessed a dramatic surge in participation, exposing infrastructure and logistical challenges that call for urgent expansion in future editions.",
    image: "https://th.bing.com/th/id/OIP.C0Hjjb0QMM_NiON45LCyfwHaEH?rs=1&pid=ImgDetMain",
    content: "COMPOSIT 2025, the flagship materials science symposium of IIT Kharagpur, witnessed an unprecedented surge in participation this year—an outcome that, while celebratory in numbers, revealed the growing pains of success. Historically known for its high-impact guest lectures, engaging workshops, and cutting-edge competitions, the fest has steadily evolved into a national magnet for students, researchers, and industry professionals. However, the dramatic hike in footfall this year caught organizers off guard. Accommodation shortages, long queues, and overwhelmed event venues led to concerns about safety, logistics, and the overall experience of attendees. While the vibrant enthusiasm for materials science is certainly a victory for the community, this year’s turnout also served as a wake-up call: great interest must be matched with even greater infrastructure. The organizing team’s passion was palpable, but 2025’s tragic overflow underscored the urgent need to scale up resources and rethink event management for future editions. COMPOSIT’s growing popularity is undeniable—now it’s time to ensure the festival’s heart doesn’t get lost in the crowd."
  },
  {
    id: 3,
    title: "Forging Global Leaders: How IIT Kharagpur’s Metallurgical Department Shapes Change-Makers",
    category: "Achievements & Highlights",
    date: "March 4, 2024",
    author: "SME Team",
    summary: "IIT Kharagpur’s MME alumni are transforming global industries and governance, from Google’s CEO to top scientific leaders in India.",
    image: "https://wallpaperaccess.com/full/4225690.jpg",
    content: "The Department of Metallurgical and Materials Engineering (MME) at IIT Kharagpur has long stood as a pillar of academic excellence, shaping individuals who go on to redefine industries and institutions. Dr. Shrikumar Banerjee, a proud alumnus from the 1967 batch and former member of the Board of Governors, was recently honored for his enduring contributions to science and engineering in India. Along similar lines, Dr. Samir Venkatpati Kamat (B.Tech 1985) has ascended to the role of Director at the Defence Metallurgical Research Laboratory (DMRL), symbolizing the seamless flow from rigorous academic roots to national leadership. Meanwhile, Prof. P.K. Sen’s selection as Chairman of the Technical Committee at the Bureau of Energy Efficiency under the Ministry of Power highlights the growing influence of metallurgical minds in policymaking. Perhaps the most globally recognized name on this list is Sundar Pichai (B.Tech 1993), whose leadership as CEO of Google reflects the department’s far-reaching impact beyond metallurgy. These stories, woven together, underscore how IIT Kharagpur’s MME alumni continue to leave indelible marks across academia, industry, governance, and global technology."
  },

  {
    id: 4,
    title: "Academic Luminaries: The Faculty Driving Breakthroughs at IIT Kharagpur’s MME Department",
    category: "Achievements & Highlights",
    date: "February 24, 2024",
    author: "News Team",
    summary: "Faculty at IIT-KGP’s MME department are driving metallurgical innovation, earning national accolades and producing high-impact research.",
    image: "https://as2.ftcdn.net/v2/jpg/05/20/79/69/1000_F_520796964_Yps9PDb5b2nSiHivhXgw6TCHviuvCjXX.jpg",
    content: "At the heart of IIT Kharagpur’s MME department is a vibrant community of faculty who serve as mentors, innovators, and nationally recognized thought leaders. With over 90 publications per year and a whopping ₹5940 lakhs in sponsored project funding over the past five years, the department continues to set benchmarks in academic productivity. Notable figures like Prof. S.K. Roy have been conferred Honorary Membership by the Indian Institute of Metals, an acknowledgment of decades of impactful teaching and research. Prof. Rahul Mitra added another feather to the department’s cap with his win of the esteemed NMD Award in the Metal Science category. Furthermore, Prof. Gour Gopal Roy was named “Metallurgist of the Year” by the Ministry of Steel for his pioneering work in rotary furnace processing of iron ore and coal fines. Sharing that accolade is Prof. Jyotsna Dutta Majumdar, whose cutting-edge materials research has transformed both the academic and industrial spheres. These accolades reflect a culture of excellence that transcends classrooms and laboratories, positioning the MME department as a national hub for metallurgical innovation."
  },
  {
    id: 5,
    title: "Young Innovators: Student Success Stories from the Metallurgical Frontier",
    category: "Achievements & Highlights",
    date: "November 18, 2024",
    author: "News Team",
    summary: "Students of IIT-KGP’s MME department are gaining national recognition, proving the department’s dedication to nurturing next-gen talent.",
    image: "https://th.bing.com/th/id/OIP.cmezrP1dnt63iMcZZWuaiQHaEK?rs=1&pid=ImgDetMain",
    content: "Innovation and brilliance don’t just emerge from the faculty at IIT Kharagpur’s MME department—they’re woven into the DNA of its students. That spirit was recently celebrated as Shri Arijit Mitra, a Dual Degree student, and Mr. Kunwar Akash Singh, a B.Tech student, were jointly awarded the prestigious IIM Vidya Bharathi Prize for their exemplary academic performance and research contributions. These accolades reflect more than personal achievement; they signify the department’s unwavering commitment to grooming the next generation of metallurgical scientists and engineers. In parallel, the department’s record of completing 43 consultancy projects worth ₹290 lakhs in the past five years serves as a powerful testament to its real-world relevance. At IIT Kharagpur, excellence is a shared pursuit—from students and scholars to researchers and industry collaborators—forming a unique ecosystem where ideas are not just born but nurtured into transformative breakthroughs."
  },
]