"use client";

import * as Popover from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

// r/place 2022 official color palette (32 colors)
const COLOR_PALETTE = [
  "#6D001A", // Dark burgundy
  "#BE0039", // Red
  "#FF4500", // Orange-red
  "#FFA800", // Orange
  "#FFD635", // Yellow
  "#FFF8B8", // Cream
  "#00A368", // Green
  "#00CC78", // Light green
  "#7EED56", // Lime
  "#00756F", // Teal
  "#009EAA", // Cyan
  "#00CCC0", // Aqua
  "#2450A4", // Blue
  "#3690EA", // Light blue
  "#51E9F4", // Sky blue
  "#493AC1", // Indigo
  "#6A5CFF", // Purple
  "#94B3FF", // Lavender
  "#811E9F", // Dark purple
  "#B44AC0", // Pink-purple
  "#E4ABFF", // Light pink
  "#DE107F", // Magenta
  "#FF3881", // Hot pink
  "#FF99AA", // Light coral
  "#6D482F", // Brown
  "#9C6926", // Dark tan
  "#FFB470", // Tan
  "#000000", // Black
  "#515252", // Dark gray
  "#898D90", // Gray
  "#D4D7D9", // Light gray
  "#FFFFFF", // White
];

type ColorPickerProps = {
  selectedColor: string | null;
  onColorSelect: (color: string) => void;
};

export function ColorPicker({ selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 hover:bg-zinc-800 transition-colors h-full">
          {selectedColor ? (
            <div
              className="w-6 h-6 rounded flex-shrink-0"
              style={{ backgroundColor: selectedColor }}
            />
          ) : (
            <div className="w-6 h-6 rounded flex-shrink-0 border-2 border-dashed border-gray-600" />
          )}
          <span className="text-xs font-bold uppercase tracking-wide text-gray-400">COLOR</span>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 shadow-xl z-50"
          sideOffset={8}
          align="center"
        >
          <div className="grid grid-cols-5 gap-2">
            {COLOR_PALETTE.map((color) => (
              <Popover.Close key={color} asChild>
                <button
                  className={cn(
                    "w-10 h-10 rounded transition-all",
                    selectedColor === color
                      ? "ring-2 ring-white scale-110"
                      : "hover:scale-105"
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => onColorSelect(color)}
                  title={color}
                />
              </Popover.Close>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
