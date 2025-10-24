import * as React from "react"
import { cn } from "../../lib/utils"

interface TabsContextValue {
    activeTab: string
    setActiveTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

const useTabsContext = () => {
    const context = React.useContext(TabsContext)
    if (!context) {
        throw new Error("Tabs components must be used within a Tabs provider")
    }
    return context
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue: string
    value?: string
    onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    ({ defaultValue, value: controlledValue, onValueChange, children, className, ...props }, ref) => {
        const [internalValue, setInternalValue] = React.useState(defaultValue)
        const value = controlledValue ?? internalValue

        const handleValueChange = React.useCallback(
            (newValue: string) => {
                if (controlledValue === undefined) {
                    setInternalValue(newValue)
                }
                onValueChange?.(newValue)
            },
            [controlledValue, onValueChange]
        )

        return (
            <TabsContext.Provider value={{ activeTab: value, setActiveTab: handleValueChange }}>
                <div ref={ref} className={className} {...props}>
                    {children}
                </div>
            </TabsContext.Provider>
        )
    }
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
            className
        )}
        {...props}
    />
))
TabsList.displayName = "TabsList"

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ className, value, ...props }, ref) => {
        const { activeTab, setActiveTab } = useTabsContext()
        const isActive = activeTab === value

        return (
            <button
                ref={ref}
                type="button"
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    isActive
                        ? "bg-[#eaa636] text-white shadow-sm"
                        : "text-muted-foreground hover:bg-background/50",
                    className
                )}
                onClick={() => setActiveTab(value)}
                {...props}
            />
        )
    }
)
TabsTrigger.displayName = "TabsTrigger"

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
    ({ className, value, ...props }, ref) => {
        const { activeTab } = useTabsContext()

        if (activeTab !== value) {
            return null
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    className
                )}
                {...props}
            />
        )
    }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }

