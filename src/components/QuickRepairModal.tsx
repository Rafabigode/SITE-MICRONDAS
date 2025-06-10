
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, X } from "lucide-react";

interface QuickRepairModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickRepairModal = ({ isOpen, onClose }: QuickRepairModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple captcha validation (1+1=2)
    if (captchaAnswer !== "2") {
      setShowError(true);
      return;
    }

    // Create WhatsApp message
    const message = `Olá! Gostaria do conserto em 30 minutos.
    
Nome: ${name}
Telefone: ${phone}

Aguardo contato!`;

    window.open(`https://wa.me/5541933328000?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
    
    // Reset form
    setName("");
    setPhone("");
    setCaptchaAnswer("");
    setShowError(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-orange-500">
            <Clock className="w-6 h-6" />
            Conserto em 30 Minutos!
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>
        
        <div className="bg-orange-50 p-4 rounded-lg mb-4">
          <h3 className="font-bold text-orange-800 mb-2">🔥 OFERTA ESPECIAL!</h3>
          <p className="text-orange-700 text-sm">
            Diagnóstico e pequenos reparos em apenas 30 minutos!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Seu nome"
            />
          </div>

          <div>
            <Label htmlFor="phone">Telefone/WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="(41) 99999-9999"
            />
          </div>

          <div>
            <Label htmlFor="captcha" className="flex items-center gap-2">
              Quanto é 1 + 1? 
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="captcha"
              type="text"
              value={captchaAnswer}
              onChange={(e) => {
                setCaptchaAnswer(e.target.value);
                setShowError(false);
              }}
              required
              placeholder="Digite o resultado"
            />
            {showError && (
              <p className="text-red-500 text-sm mt-1">Resposta incorreta. Tente novamente.</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3"
          >
            Solicitar Conserto Rápido
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center">
          Ao enviar, você será redirecionado para nosso WhatsApp
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default QuickRepairModal;
