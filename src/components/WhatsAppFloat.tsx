import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/255756377013";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-tech-green hover:bg-tech-green-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={24} className="text-background" />
      </Button>
    </a>
  );
};

export default WhatsAppFloat;