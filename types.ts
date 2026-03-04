export interface ChatMessage {
  role: "user" | "model";
  text: string;
  isError?: boolean;
}

export enum ViewState {
  HOME = "HOME",
  OFFERINGS = "OFFERINGS",
  PHILOSOPHY = "PHILOSOPHY",
}

export interface OfferingCategory {
  title: string;
  description: string;
  image: string;
  features: string[];
}
