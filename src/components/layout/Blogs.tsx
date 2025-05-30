import { useState } from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaFolder,
  FaArrowRight,
  FaSearch,
  FaRegComments,
} from "react-icons/fa";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const blogCategories = [
    { id: "all", label: "All Topics" },
    { id: "construction", label: "Construction" },
    { id: "design", label: "Architectural Design" },
    { id: "sustainability", label: "Sustainability" },
    { id: "technology", label: "Construction Tech" },
    { id: "management", label: "Project Management" },
  ];

  const allPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Building Materials",
      excerpt:
        "Exploring innovative eco-friendly materials that are revolutionizing the construction industry.",
      category: "sustainability",
      date: "May 15, 2025",
      author: "Sarah Johnson",
      comments: 12,
      image: "sustainable-materials",
    },
    {
      id: 2,
      title: "10 Construction Tech Innovations in 2025",
      excerpt:
        "From AI-powered project management to drone site surveys, discover the latest technologies transforming construction sites.",
      category: "technology",
      date: "April 28, 2025",
      author: "Michael Chen",
      comments: 8,
      image: "tech-innovations",
    },
    {
      id: 3,
      title: "Maximizing Efficiency in Large-Scale Projects",
      excerpt:
        "Strategies for managing timelines, resources, and teams on complex construction projects.",
      category: "management",
      date: "April 10, 2025",
      author: "David Wilson",
      comments: 5,
      image: "efficiency",
    },
    {
      id: 4,
      title: "Biophilic Design in Modern Architecture",
      excerpt:
        "How integrating nature into building design improves wellbeing and productivity.",
      category: "design",
      date: "March 22, 2025",
      author: "Elena Rodriguez",
      comments: 15,
      image: "biophilic-design",
    },
    {
      id: 5,
      title: "Earthquake-Resistant Building Techniques",
      excerpt:
        "Advanced engineering methods for creating structures that withstand seismic activity.",
      category: "construction",
      date: "March 5, 2025",
      author: "James Carter",
      comments: 7,
      image: "earthquake-resistant",
    },
    {
      id: 6,
      title: "The Economics of Green Building",
      excerpt:
        "Long-term cost benefits and ROI of sustainable construction practices.",
      category: "sustainability",
      date: "February 18, 2025",
      author: "Priya Patel",
      comments: 9,
      image: "green-building",
    },
    {
      id: 7,
      title: "3D Printing in Construction: Case Studies",
      excerpt:
        "Examining real-world applications of additive manufacturing in building projects.",
      category: "technology",
      date: "February 3, 2025",
      author: "Michael Chen",
      comments: 11,
      image: "3d-printing",
    },
    {
      id: 8,
      title: "Historic Renovation Best Practices",
      excerpt:
        "Preserving architectural heritage while meeting modern building standards.",
      category: "construction",
      date: "January 15, 2025",
      author: "David Wilson",
      comments: 6,
      image: "historic-renovation",
    },
    {
      id: 9,
      title: "Smart Building Integration Strategies",
      excerpt:
        "Seamlessly incorporating IoT devices and automation systems into new constructions.",
      category: "technology",
      date: "January 2, 2025",
      author: "Sarah Johnson",
      comments: 14,
      image: "smart-building",
    },
  ];

  const popularPosts = [
    { id: 1, title: "Top 10 Construction Safety Innovations", comments: 24 },
    { id: 2, title: "Cost Estimation Mistakes to Avoid", comments: 18 },
    { id: 3, title: "Modular Construction: Pros and Cons", comments: 21 },
    { id: 4, title: "Zero-Waste Construction Sites", comments: 15 },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? allPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allPosts.filter(
          (post) =>
            post.category === activeCategory &&
            (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
        );

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl">
          Construction <span className="text-amber-700">Insights</span> & News
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
          Stay updated with the latest trends, innovations, and best practices
          in the construction industry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Category Navigation */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="flex flex-wrap border-b border-gray-200">
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setVisiblePosts(6);
                  }}
                  className={`py-2 px-4 text-sm font-medium ${
                    activeCategory === category.id
                      ? "text-amber-700 border-b-2 border-amber-700"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="flex items-center mr-4">
                      <FaCalendarAlt className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full">
                      <FaFolder className="mr-1" />
                      {
                        blogCategories.find((c) => c.id === post.category)
                          ?.label
                      }
                    </span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaRegComments className="mr-1" />
                      {post.comments} comments
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center mb-12">
              <button
                onClick={loadMorePosts}
                className="px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors flex items-center mx-auto"
              >
                Load More Articles
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-950 mb-2">
                No articles found
              </h3>
              <p className="text-gray-700">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Popular Posts */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-950 mb-4 flex items-center">
              <span className="w-3 h-3 bg-amber-700 rounded-full mr-2"></span>
              Popular Articles
            </h3>
            <ul className="space-y-4">
              {popularPosts.map((post) => (
                <li
                  key={post.id}
                  className="pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                >
                  <a
                    href="#"
                    className="font-medium text-gray-950 hover:text-amber-700"
                  >
                    {post.title}
                  </a>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <FaRegComments className="mr-1" />
                    {post.comments} comments
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-950 mb-4 flex items-center">
              <span className="w-3 h-3 bg-amber-700 rounded-full mr-2"></span>
              Categories
            </h3>
            <ul className="space-y-2">
              {blogCategories
                .filter((c) => c.id !== "all")
                .map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg ${
                        activeCategory === category.id
                          ? "bg-amber-100 text-amber-700"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-gray-950 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              Industry Insights
            </h3>
            <p className="text-amber-100 mb-4">
              Get the latest construction news and trends delivered to your
              inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-amber-700 rounded-xl p-12 mt-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Have a Construction Challenge?
        </h2>
        <p className="text-amber-100 max-w-2xl mx-auto mb-8">
          Our team of experts is ready to provide solutions for your unique
          project requirements.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-amber-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </button>
          <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
