'use client';
import dynamic from 'next/dynamic';
import { GlassButton } from "../components/ui/glass-button";

// Dynamically import `motion` to prevent SSR issues
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

const events = [
  { id: 1, title: "Tech Talk: AI in Healthcare", date: "2024-01-15", time: "14:00" },
  { id: 2, title: "Workshop: Web Development Basics", date: "2024-01-22", time: "10:00" },
  { id: 3, title: "Panel Discussion: Women in STEM", date: "2024-02-05", time: "16:00" },
];

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Use dynamically imported motion.h1 */}
      <MotionH1
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Upcoming Events
      </MotionH1>
      <MotionDiv
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {events.map((event, index) => (
          <MotionDiv
            key={event.id}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{event.title}</h2>
            <p className="text-white/80 mb-4">
              {new Date(`${event.date}T${event.time}`).toLocaleString()}
            </p>
            <GlassButton variant="pill">Register</GlassButton>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}
