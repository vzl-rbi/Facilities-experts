import { FiPlus, FiMail } from "react-icons/fi";
import question from "/src/images/question.png";

const Faq = () => {
  return (
    <section className="bg-milk-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
            - FAQs -
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Questions? <span className="text-amber-600">Look Here</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Questions Column */}
          <div className="flex-1 space-y-6">
            {/* Question 1 */}
            <div className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between p-4 cursor-pointer bg-white">
                <h3 className="font-medium text-gray-900">First Question?</h3>
                <FiPlus className="text-gray-500 group-hover:text-amber-600 transition-colors" />
              </div>
              <div className="px-4 pb-4 pt-0 bg-gray-50 hidden group-focus:block">
                <p className="text-gray-600">
                  Answer to the first question would appear here when expanded.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between p-4 cursor-pointer bg-white">
                <h3 className="font-medium text-gray-900">Second Question?</h3>
                <FiPlus className="text-gray-500 group-hover:text-amber-600 transition-colors" />
              </div>
              <div className="px-4 pb-4 pt-0 bg-gray-50 hidden group-focus:block">
                <p className="text-gray-600">
                  Answer to the second question would appear here when expanded.
                </p>
              </div>
            </div>

            {/* Question 3 - Expanded Example */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-4 cursor-pointer  bg-gray-900">
                <h3 className="font-medium text-white">Third Question?</h3>
                <FiPlus className="text-gray-500 transform rotate-45" />
              </div>
              <div className="px-4 pb-4 pt-0  bg-gray-900">
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                  eum molestiae, aut iste perferendis natus minima sequi
                  repellat ipsum, illo animi quidem deserunt nam veniam dicta
                  sit consectetur optio labore.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:w-1/3  bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={question} alt="Question" className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Have a Question?
              </h2>
              <p className="text-white mb-6">
                Can't find what you're looking for? Our team is here to help
                answer any questions you might have.
              </p>
              <button className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-lg transition-colors mx-auto">
                <FiMail className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
