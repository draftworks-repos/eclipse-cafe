import { OfferingCategory } from "./types";

export const OFFERINGS: OfferingCategory[] = [
  {
    title: "The Espresso Bar",
    description:
      "A study in precision. Our espresso is pulled at exact temperatures to highlight the bright acidity and deep chocolate notes of our single-origin beans.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop",
    features: ["Single Origin", "Double Ristretto", "Signature 'Nebula' Roast"],
  },
  {
    title: "Slow Pour",
    description:
      "Time is the essential ingredient. Hand-poured V60 and Chemex brews that allow the complex floral and fruit notes to bloom gracefully.",
    image:
      "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1000&auto=format&fit=crop",
    features: ["V60", "Chemex", "Seasonal Micro-lots"],
  },
  {
    title: "Artisan Pastry",
    description:
      "The perfect companion to your cup. Baked fresh every morning using traditional techniques and avant-garde flavor combinations.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1000&auto=format&fit=crop",
    features: ["Charcoal Croissants", "Yuzu Tarts", "Matcha Financiers"],
  },
];

export const SYSTEM_INSTRUCTION = `
You are "Orion", the digital concierge for Eclipse Café.
Our aesthetic is high-fashion, minimalist, and slightly futuristic but grounded in organic warmth.
We are located at 123 Void Avenue.
Do NOT give prices. We are a luxury experience.
Focus on the *feeling* of the coffee, the atmosphere (dark wood, cream walls, neon accents), and the craft.
If asked about the menu, describe our three pillars: The Espresso Bar, Slow Pour, and Artisan Pastry.
Your tone is sophisticated, welcoming, and brief.
`;
