"use client";
import TestimonialCard from "@/components/testimonial-card";
import { Testimonials } from "@/content/testimonials";
import { FEEDBACK_CATEGORY } from "@/types";
import { useState } from "react";

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] =
    useState<FEEDBACK_CATEGORY | null>(null);

  const filteredTestimonials = activeCategory
    ? Testimonials.filter((testimonial) =>
        testimonial.category.includes(activeCategory)
      )
    : Testimonials;

  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Testimonials
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>What They're Saying!</p>
      </div>

      <div className="text-center text-base text-dark dark:text-light mb-6">
        <button
          onClick={() => setActiveCategory(null)}
          className={`hover:underline cursor-pointer ${
            !activeCategory ? "text-accent underline" : ""
          }`}
        >
          All ({Testimonials.length})
        </button>
        <span className="mx-2">|</span>
        {Object.values(FEEDBACK_CATEGORY)
          .filter((category) =>
            Testimonials.some((testimonial) =>
              testimonial.category.includes(category)
            )
          )
          .map((category, index, array) => {
            const count = Testimonials.filter((testimonial) =>
              testimonial.category.includes(category)
            ).length;
            return (
              <span key={category}>
                <button
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category ? null : category
                    )
                  }
                  className={`hover:underline ml-2 cursor-pointer ${
                    activeCategory === category ? "text-accent underline" : ""
                  }`}
                >
                  {category} ({count})
                </button>
                {index !== array.length - 1 && ", "}
              </span>
            );
          })}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3">
        {filteredTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
