import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

type ProjectFilterProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex gap-2 justify-center"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Badge 
          variant={activeFilter === "all" ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onFilterChange("all")}
        >
          All Projects
        </Badge>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Badge 
          variant={activeFilter === "web" ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onFilterChange("web")}
        >
          Web Development
        </Badge>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Badge 
          variant={activeFilter === "data" ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onFilterChange("data")}
        >
          Data Science
        </Badge>
      </motion.div>
    </motion.div>
  )
}