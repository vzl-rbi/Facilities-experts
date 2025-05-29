import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import workProgress from "/src/images/work-in-progress.jpg";
import civilEngineer from "/src/images/civil-engineering.webp";
import worker from "/src/images/worker.jpg";

const BlogNews = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: civilEngineer,
      imgAlt: "Civil engineering project with cranes and buildings",
      category: "Construction Trends",
      date: new Date(2025, 0, 15),
      headline: "How Technology is Revolutionizing Daily Construction Tasks",
      excerpt:
        "Discover how cutting-edge technology is transforming daily operations in the construction industry, improving efficiency and safety across job sites worldwide.",
      slug: "/blog/technology-in-construction",
    },
    {
      id: 2,
      imgSrc: workProgress,
      imgAlt: "Construction site with work in progress signs",
      category: "Construction Trends",
      date: new Date(2025, 0, 15),
      headline: "How Technology is Revolutionizing Daily Construction Tasks",
      excerpt:
        "Explore innovative techniques for optimizing construction workflows and increasing productivity through smart project management strategies.",
      slug: "/blog/streamlining-workflows",
    },
    {
      id: 3,
      imgSrc: worker,
      imgAlt: "Construction worker with safety helmet and tools",
      category: "Construction Trends",
      date: new Date(2025, 0, 15),
      headline: "How Technology is Revolutionizing Daily Construction Tasks",
      excerpt:
        "Learn about the latest advancements in construction safety technology and training programs that are setting new industry standards.",
      slug: "/blog/worker-safety-future",
    },
  ];

  const formatDate = (dateObj: Date) => {
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="blogs" className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold  text-amber-700">- News & Blogs -</p>
        </div>

        <div className="mt-6 flex flex-col items-start gap-y-6 sm:flex-row sm:items-center sm:justify-between mb-12 lg:mb-16">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
            Our Latest <span className="text-amber-600">News & Blogs</span>
          </h2>

          <div className="flex items-center gap-3">
            <a
              href="/blog"
              className="bg-amber-600 text-white font-bold text-sm px-5 py-1.5 rounded-full hover:bg-amber-700 transition-colors w-full md:w-auto"
              aria-label="View all blog posts"
            >
              View All
            </a>
            <a
              href="/blog"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-700 transition-colors"
              aria-label="View all articles"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-3 h-3 text-white"
              />
            </a>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image with clipped top */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.imgSrc}
                  alt={post.imgAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 [clip-path:polygon(40px_0,100%_0,100%_100%,0_100%,0_40px)] md:[clip-path:polygon(80px_0,100%_0,100%_100%,0_100%,0_80px)]"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                {/* Category badge */}
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-amber-600 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Date with calendar icon */}
                <div className="flex items-center text-xs text-slate-500 mb-3">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="w-3.5 h-3.5 mr-1.5 text-slate-400"
                  />
                  <time dateTime={post.date.toISOString()}>
                    {formatDate(post.date)}
                  </time>
                </div>

                {/* Headline */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug hover:text-amber-600 transition-colors">
                  <a href={post.slug}>{post.headline}</a>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More button */}
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={post.slug}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-amber-600 rounded-md shadow-sm hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 transition-colors"
                  >
                    Read More
                  </a>
                  <a
                    href={post.slug}
                    className="inline-flex items-center justify-center w-8 h-8 transition-colors"
                    aria-label={`Read more about ${post.headline}`}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-3 h-3 text-amber-600"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
