'use client';

import dynamic from 'next/dynamic';

// Dynamically import `motion` from framer-motion
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1));
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div));

// Dynamically import Image if desired (optional)
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

const team = [
  { id: 1, name: "Jane Doe", role: "President", image: "/placeholder.svg" },
  { id: 2, name: "John Smith", role: "Vice President", image: "/placeholder.svg" },
  { id: 3, name: "Alice Johnson", role: "Secretary", image: "/placeholder.svg" },
  { id: 4, name: "Bob Williams", role: "Treasurer", image: "/placeholder.svg" },
];

export default function OurTeam() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Use dynamically imported motion.h1 */}
      <MotionH1
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Team
      </MotionH1>
      <MotionDiv
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {team.map((member, index) => (
          <MotionDiv
            key={member.id}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <DynamicImage
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-white mb-2">{member.name}</h2>
            <p className="text-white/80">{member.role}</p>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}
