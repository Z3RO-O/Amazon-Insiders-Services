import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Get in touch with our professional team</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Opening Hours</h3>
                  <p className="text-gray-600">8:00AM - 6:00PM Monday to Saturday</p>
                  <p className="text-gray-600">Monday-Friday: 09:00-22:00</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">support@amzinsiders.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Telegram</h3>
                  <p className="text-gray-600">@agedamzaccount</p>
                  <p className="text-sm text-black">Online 24x7</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">3649 Lafayette Rd, IN</p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-black">Support Features</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Live Chat Support - 7*24H online chat</li>
                    <li>• Send Ticket - Left your message</li>
                    <li>• Guarantee - Buy without risk</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What can we help you with?" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your requirements..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
