import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="bg-gray-800 border-gray-700 transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl font-bold">
          {icon}
          <span className="ml-4">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};
