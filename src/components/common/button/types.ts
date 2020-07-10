export type Variant = "primary" | "round-swipe-top" | "side-swap";

export type LinkButtonVariant =
  | "shuffle"
  | "side-swap"
  | "circle-build"
  | "stereoscopic";

export type ButtonProps = {
  variant?: Variant;
  text?: string;
};

export type LinkButtonProps = {
  variant?: LinkButtonVariant;
  text?: string;
};
