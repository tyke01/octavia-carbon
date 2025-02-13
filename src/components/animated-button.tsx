import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  iconClassName?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ href, className, iconClassName, children, ...props }, ref) => {
    const buttonContent = (
      <Button
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-full pr-12 py-6 transition-all duration-300 hover:pr-14 text-xl hover:bg-white hover:text-black",
          className
        )}
        {...props}
      >
        {children}
        <span className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:right-3 group-hover:bg-black group-hover:text-white">
          <ArrowRight
            className={cn(
              " transition-transform duration-300 group-hover:translate-x-1",
              iconClassName
            )}
          />
        </span>
      </Button>
    );

    if (href) {
      return <Link href={href}>{buttonContent}</Link>;
    }

    return buttonContent;
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
