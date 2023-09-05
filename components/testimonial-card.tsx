import { Testimonial as TestimonialCard } from "@/types";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialProps {
  testimonial: TestimonialCard;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-lighter dark:bg-dark transition-all mb-4">
      <figure className="max-w-screen-md mx-auto p-4">
        <blockquote>
          <p className="text-lg font-medium text-darker dark:text-lighter">
            &quot;
            {testimonial.message.split("\n").map((line, index, arr) => (
              <React.Fragment key={index}>
                {line}
                {index !== arr.length - 1 && <br />}
                {/* Add line break except for the last line */}
              </React.Fragment>
            ))}
            &quot;
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-6 space-x-3">
          <Image
            className="w-8 h-8 rounded-full"
            src={`/testimonials/${testimonial.photo}`}
            alt={testimonial.name}
            width={24}
            height={24}
          />
          <div className="flex items-center divide-x-2 divide-gray-400 dark:divide-gray-600">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              {testimonial.name}
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              {testimonial.position}
              <span className="text-accent">
                {testimonial.company ? ` @${testimonial.company}` : ""}
              </span>
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialCard;
