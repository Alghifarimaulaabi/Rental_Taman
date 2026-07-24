"use client";

import { motion, AnimatePresence } from "motion/react";
import { Plant } from "@/lib/types/plant";
import PlantCard from "./PlantCard";

interface PlantGridProps {
  plants: Plant[];
}

export default function PlantGrid({ plants }: PlantGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
    >
      <AnimatePresence mode="popLayout">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
