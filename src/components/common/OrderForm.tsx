import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { MessageCircle, Send, User, Mail, Package } from 'lucide-react';

interface OrderFormProps {
  serviceName: string;
  servicePrice?: string;
  children: React.ReactNode;
}

const OrderForm: React.FC<OrderFormProps> = ({ serviceName, servicePrice, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const baseMessage = `Hello, I would like to inquire about your services and would like to place an order.

*Service Details:*
_Service:_ ${serviceName}
${servicePrice ? `_Price:_ ${servicePrice}` : ''}

*Customer Details:*
_Name:_ ${formData.name}
_Email:_ ${formData.email}

${formData.message ? `*Additional Message:* ${formData.message}` : ''}

Could you please provide me with the next steps to proceed with this order?

Thank you for your time.

Best regards,
_${formData.name}_`;

    return encodeURIComponent(baseMessage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields (Name and Email)');
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/+18658880593?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Close the dialog and reset form
    setIsOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleDialogClose = () => {
    setIsOpen(false);
    // Reset form when dialog is closed
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]" onPointerDownOutside={handleDialogClose}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Order Service
          </DialogTitle>
          <DialogDescription>
            Fill in your details to order <strong>{serviceName}</strong>. We'll send your request
            directly to our WhatsApp for quick processing.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Info */}
          <div className="bg-muted/50 p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <Package className="h-4 w-4 text-primary" />
              <span className="font-semibold text-sm">Selected Service</span>
            </div>
            <p className="text-sm font-medium">{serviceName}</p>
            {servicePrice && (
              <p className="text-sm text-muted-foreground mt-1">Price: {servicePrice}</p>
            )}
          </div>

          {/* Customer Details */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Additional Message (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Any specific requirements or questions about this service..."
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full resize-none"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer"
              onClick={handleDialogClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
            >
              <Send className="h-4 w-4 mr-2" />
              Send to WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
