import React from "react";
import starIcon from "/src/images/star.png";
import personImagePlaceholder from "/src/images/person.png";

// 1. Define an interface for the review object
interface Review {
  id: number;
  rating: number;
  head: string;
  description: string;
  imgPerson: string; // Type of imported image is typically string (path)
  name: string;
  post: string;
}

// 2. Type the reviewsData array
const reviewsData: Review[] = [
  {
    id: 1,
    rating: 5,
    head: "Beyond Expectations!",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tenetur voluptate in, assumenda similique, atque eligendi, vel reiciendis exercitationem maiores architecto iste repellendus laboriosam reprehenderit. Nobis animi quae quia ex?",
    imgPerson: personImagePlaceholder,
    name: "Magnum Hunter",
    post: "CEO, Company",
  },
  {
    id: 2,
    rating: 5,
    head: "Beyond Expectations!",
    description:
      "Adipisicing elit a tenetur voluptate in, assumenda similique, atque eligendi, vel reiciendis exercitationem maiores architecto iste repellendus laboriosam reprehenderit. Nobis animi quae quia ex? Lorem ipsum dolor sit.",
    imgPerson: personImagePlaceholder,
    name: "Alexia Brand",
    post: "CTO, Innovatech",
  },
  // Add more reviews as needed
];

// 3. Define props for TestimonialCard
interface TestimonialCardProps {
  review: Review; // The review prop is of type Review
}

// 4. Update TestimonialCard component with typed props
const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
  return (
    <div className="bg-slate-700 p-6 rounded-lg shadow-xl flex flex-col h-full">
      <div className="flex mb-3">
        {[...Array(review.rating || 5)].map((_, i) => (
          <img key={i} src={starIcon} alt="Star" className="size-5 mr-1" />
        ))}
      </div>
      <h3 className="text-xl text-white font-semibold mb-2">{review.head}</h3>
      <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
        {review.description}
      </p>
      <div className="flex flex-row items-center mt-auto pt-4 border-t border-slate-600">
        <img
          src={review.imgPerson}
          alt={review.name}
          className="size-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-white font-medium">{review.name}</p>
          <p className="text-slate-400 text-xs">{review.post}</p>
        </div>
      </div>
    </div>
  );
};

// 4. Update Testimonials component (no props to type here directly, but uses typed data)
const Testimonials: React.FC = () => {
  return (
    <div className="bg-slate-800 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-white tracking-wider">
            <span className="text-3xl px-2 text-amber-600">-</span> Testimonials
          </p>
          <h2 className="text-4xl text-amber-600 font-bold mt-2">
            Experiences Shared By
          </h2>
          <p className="text-3xl text-slate-300 font-semibold mt-1">
            Our Clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* TypeScript infers `review` as type `Review` here because `reviewsData` is `Review[]` */}
          {reviewsData.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
