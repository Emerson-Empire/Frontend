import React from "react";

const Reviews: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase mb-4">Reviews</p>

        <h2 className="text-4xl font-bold mb-14">
          Lorem ipsum dolor sit amet consecteure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl p-8 text-left">
              <p className="font-bold mb-2">RATING ⭐⭐⭐⭐⭐</p>

              <div className="flex items-center gap-4 my-5">
                <div className="w-14 h-14 rounded-full bg-gray-300" />

                <div>
                  <h4 className="font-bold">USER NAME</h4>
                  <p className="text-sm text-gray-600">Occupation</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm italic">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit.”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;