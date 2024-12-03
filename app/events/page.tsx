import { motion } from "framer-motion"
import { GlassButton } from "../components/ui/glass-button"

const events = [
  { id: 1, title: "Tech Talk: AI in Healthcare", date: "2024-01-15", time: "14:00" },
  { id: 2, title: "Workshop: Web Development Basics", date: "2024-01-22", time: "10:00" },
  { id: 3, title: "Panel Discussion: Women in STEM", date: "2024-02-05", time: "16:00" },
]

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Upcoming Events
      </motion.h1>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {events.map((event, index) => (
          <motion.div
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

