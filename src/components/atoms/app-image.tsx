import { cn } from "@/lib/utils";

export function AppImage({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src || ""}
      alt={alt || ""}
      width={"100%"}
      height={"100%"}
      className={cn("h-full w-full object-contain", className)}
      {...props}
    />
  );
}
