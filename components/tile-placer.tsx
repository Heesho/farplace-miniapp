"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// r/place inspired color palette (24 colors - 2 rows of 12)
const COLOR_PALETTE = [
  "#6D001A", "#BE0039", "#FF4500", "#FFA800",
  "#FFD635", "#00A368", "#00CC78", "#7EED56",
  "#009EAA", "#2450A4", "#3690EA", "#51E9F4",
  "#493AC1", "#6A5CFF", "#811E9F", "#B44AC0",
  "#DE107F", "#FF3881", "#6D482F", "#000000",
  "#515252", "#898D90", "#D4D7D9", "#FFFFFF",
];

type TilePlacerProps = {
  selectedColor: string | null;
  onColorSelect: (color: string) => void;
  onClearColor: () => void;
  onPlace: () => void;
  disabled: boolean;
  isPlacing: boolean;
};

export function TilePlacer({
  selectedColor,
  onColorSelect,
  onClearColor,
  onPlace,
  disabled,
  isPlacing
}: TilePlacerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCancel = () => {
    setIsExpanded(false);
    onClearColor();
  };

  const handleConfirm = () => {
    if (selectedColor) {
      onPlace();
      setIsExpanded(false);
    }
  };

  const handleExpand = () => {
    if (!disabled) {
      setIsExpanded(true);
    }
  };

  // Default state: Single button
  if (!isExpanded) {
    return (
      <button
        className="w-full h-11 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-bold text-white shadow-lg transition-colors disabled:cursor-not-allowed disabled:opacity-40 flex items-center justify-center"
        onClick={handleExpand}
        disabled={disabled}
      >
        {isPlacing ? "PLACING..." : "PLACE A TILE"}
      </button>
    );
  }

  // Expanded state: Color picker + X + Checkmark
  return (
    <div className="flex gap-1 items-stretch h-11">
      {/* Color Picker - 2 rows of colors */}
      <div className="flex-1 overflow-hidden flex flex-col gap-[1px] bg-black">
        {/* Split colors into 2 rows of 12 */}
        <div className="flex flex-1 gap-[1px]">
          {COLOR_PALETTE.slice(0, 12).map((color) => (
            <button
              key={color}
              className={cn(
                "flex-1 transition-all",
                selectedColor === color
                  ? "ring-2 ring-white ring-inset"
                  : "hover:opacity-80"
              )}
              style={{ backgroundColor: color }}
              onClick={() => onColorSelect(color)}
              title={color}
            />
          ))}
        </div>
        <div className="flex flex-1 gap-[1px]">
          {COLOR_PALETTE.slice(12, 24).map((color) => (
            <button
              key={color}
              className={cn(
                "flex-1 transition-all",
                selectedColor === color
                  ? "ring-2 ring-white ring-inset"
                  : "hover:opacity-80"
              )}
              style={{ backgroundColor: color }}
              onClick={() => onColorSelect(color)}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Cancel Button */}
      <button
        className="bg-zinc-800 hover:bg-zinc-700 rounded-xl w-11 flex items-center justify-center shadow-lg transition-colors flex-shrink-0"
        onClick={handleCancel}
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Confirm Button */}
      <button
        className={cn(
          "rounded-xl w-11 flex items-center justify-center shadow-lg transition-colors flex-shrink-0",
          selectedColor
            ? "bg-zinc-800 hover:bg-zinc-700"
            : "bg-zinc-900 cursor-not-allowed opacity-40"
        )}
        onClick={handleConfirm}
        disabled={!selectedColor}
      >
        <Check className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
