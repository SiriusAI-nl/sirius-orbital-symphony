
import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cn } from "@/lib/utils"

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
    className?: string
  }
>(({ className, ...props }, ref) => {
  // Create a ref to track hover state
  const collapsibleRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)
  
  // If we have a class that includes "hover:open", open on hover
  const hasHoverOpen = className?.includes("hover:open")
  
  React.useEffect(() => {
    if (!hasHoverOpen || !collapsibleRef.current) return
    
    // Set open state based on hover when the hover:open class is present
    if (hasHoverOpen && isHovered && props.onOpenChange) {
      props.onOpenChange(true)
    }
    
    // Only close on mouse leave if we're using hover functionality
    if (hasHoverOpen && !isHovered && props.onOpenChange && !props.open) {
      props.onOpenChange(false)
    }
  }, [isHovered, props.onOpenChange, hasHoverOpen, props.open])
  
  return (
    <CollapsiblePrimitive.Root 
      ref={ref}
      className={cn(className)}
      {...props}
      asChild={false}
    >
      <div
        ref={collapsibleRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {props.children}
      </div>
    </CollapsiblePrimitive.Root>
  )
})
Collapsible.displayName = "Collapsible"

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn("overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", className)}
    {...props}
  />
))
CollapsibleContent.displayName = "CollapsibleContent"

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
