"use client";

import { cn } from "@/lib/utils";

// r/place inspired color palette - compact version
const COLOR_PALETTE = [
  "#FF4500", // Red-Orange
  "#FFA500", // Orange
  "#FFD700", // Gold
  "#90EE90", // Light Green
  "#00CED1", // Turquoise
  "#4169E1", // Royal Blue
  "#8A2BE2", // Blue Violet
  "#FF1493", // Deep Pink
  "#FFFFFF", // white
  "#000000", // Black
];

type ColorPickerProps = {
  selectedColor: string;
  onColorSelect: (color: string) => void;
};

export function ColorPicker({ selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <div className="flex gap-1 items-center">
      {COLOR_PALETTE.map((color) => (
        <button
          key={color}
          className={cn(
            "w-6 h-6 rounded transition-all flex-shrink-0",
            selectedColor === color
              ? "ring-2 ring-white scale-110"
              : "hover:scale-105"
          )}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
          title={color}
        />
      ))}
    </div>
  );
}
