import TestimonialCard from "@/components/testimonial-card";
import { Testimonials } from "@/content/testimonials";

export default function TestimonialsPage() {
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Testimonials
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>What They're Saying!</p>
      </div>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
        {Testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
