import { Card, CardContent } from "@/components/ui/card";

export function ServiceCard({ title, desc }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </CardContent>
    </Card>
  );
}
