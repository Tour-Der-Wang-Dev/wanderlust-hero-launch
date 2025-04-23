
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Map, Phone, Mail, Facebook, Instagram } from "lucide-react";

interface ContactInfo {
  phone: string;
  email: string;
}

interface SocialMedia {
  facebook: string;
  instagram: string;
}

interface ContactAndFooterProps {
  contactInfo: ContactInfo;
  socialMedia: SocialMedia;
}

const ContactAndFooter: React.FC<ContactAndFooterProps> = ({
  contactInfo,
  socialMedia,
}) => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Map className="text-orange-400 mr-3" />
                <h2 className="text-3xl font-bold">Contact Us</h2>
              </div>
              
              <p className="mb-8 text-gray-300">
                Have questions about visiting Wang Sam Mo? We're here to help you plan your perfect trip.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="text-orange-400 mr-3" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-orange-400 mr-3" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a 
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-gray-800 font-bold text-xl mb-4">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Your message"
                      className="w-full mt-1 px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="py-8">
          <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="Wang Sam Mo Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7702.147578593924!2d98.97250624837046!3d19.990784297320315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7704c2060f587%3A0xd5cc0e43b0bfd423!2sChiang%20Rai%2C%20Thailand!5e0!3m2!1sen!2sus!4v1650638925044!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img
                src="/lovable-uploads/47873bb0-51cd-4862-a6bd-b47e89255fbe.png"
                alt="Tour Der Wang Logo"
                className="h-10"
              />
            </div>
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Wang Sam Mo Tourism. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactAndFooter;
