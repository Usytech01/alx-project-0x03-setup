// Interface for routing from pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// Interface for Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: string;
  action?: () => void;
}

// Interface for Layout component
export interface LayoutProps {
  children: React.ReactNode;
}
