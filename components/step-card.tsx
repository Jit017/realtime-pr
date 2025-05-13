import { Card, CardContent } from "@/components/ui/card"

interface StepCardProps {
  number: number
  title: string
  description: string
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <Card className="border-border group overflow-hidden relative transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-primary/20">
            {number}
          </div>
          <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
