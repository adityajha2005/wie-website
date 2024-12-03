'use client';
import { motion } from 'framer-motion';
import { GlassButton } from "../components/ui/glass-button"
import dynamic from 'next/dynamic';
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

const resources = [
  { id: 1, title: "Introduction to Programming", category: "Tutorials" },
  { id: 2, title: "Machine Learning Basics", category: "Courses" },
  { id: 3, title: "Web Development Tools", category: "Tools" },
  { id: 4, title: "Data Structures and Algorithms", category: "Books" },
]

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <MotionH1
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Learning Resources
      </MotionH1>
      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {resources.map((resource, index) => (
          <MotionDiv
            key={resource.id}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{resource.title}</h2>
            <p className="text-white/80 mb-4">{resource.category}</p>
            <GlassButton variant="pill">Access Resource</GlassButton>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}


