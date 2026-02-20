import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const events = [
  {
    title: "Sunday Hiking Group 🥾",
    org: "Umeed Connect",
    date: "Sun, Feb 23",
    time: "9:00 AM",
    location: "Lion Rock Country Park",
    attendees: 12,
    category: "Outdoors",
  },
  {
    title: "Board Game Night 🎲",
    org: "HKSKH Youth Network",
    date: "Fri, Feb 28",
    time: "7:00 PM",
    location: "Jordan Community Centre",
    attendees: 8,
    category: "Social",
  },
  {
    title: "Career Talk: Engineering Pathways",
    org: "Zubin Foundation",
    date: "Sat, Mar 1",
    time: "2:00 PM",
    location: "Online (Zoom)",
    attendees: 25,
    category: "Career",
  },
  {
    title: "Creative Writing Workshop ✍️",
    org: "Umeed Connect",
    date: "Wed, Mar 5",
    time: "4:30 PM",
    location: "Kwun Tong Youth Hub",
    attendees: 6,
    category: "Creative",
  },
  {
    title: "Basketball Pickup Game 🏀",
    org: "EM Sports League",
    date: "Sat, Mar 8",
    time: "10:00 AM",
    location: "Victoria Park Courts",
    attendees: 14,
    category: "Sports",
  },
];

const categoryColors: Record<string, string> = {
  Outdoors: "bg-teal text-teal-foreground",
  Social: "gradient-primary text-primary-foreground",
  Career: "bg-primary text-primary-foreground",
  Creative: "gradient-accent text-accent-foreground",
  Sports: "gradient-secondary text-secondary-foreground",
};

const Events = () => {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader title="Community Events" subtitle="Meet people, build connections" />

      <div className="px-4 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-hero rounded-2xl p-4 mb-5"
        >
          <p className="text-sm text-foreground font-medium">🤝 All events are vetted and hosted by trusted community organizations.</p>
        </motion.div>

        <div className="space-y-3">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-sm text-foreground">{event.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">by {event.org}</p>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[event.category] || "bg-muted text-muted-foreground"}`}>
                  {event.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {event.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> {event.attendees} going
                </span>
              </div>

              <button className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                Join event <ExternalLink className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
