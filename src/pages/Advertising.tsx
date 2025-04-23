
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/utils/formatter";
import { CalendarDays, Users, MessageSquare, Image, Video, Star, CircleCheck } from "lucide-react";

const Advertising = () => {
  const { language, t } = useLanguage();

  // Package data
  const packages = [
    {
      id: "basic",
      name: language === "en" ? "Basic" : "พื้นฐาน",
      price: 1500,
      duration: language === "en" ? "1 month" : "1 เดือน",
      color: "bg-blue-100 border-blue-300",
      features: [
        language === "en" ? "Side banner advertisement" : "แบนเนอร์ด้านข้างเว็บ",
        language === "en" ? "1 social media mention" : "การกล่าวถึงในโซเชียลมีเดีย 1 ครั้ง",
        language === "en" ? "Listing in business directory" : "รายชื่อในสมุดรายชื่อธุรกิจ"
      ],
      icon: <Star className="h-8 w-8 text-blue-500" />
    },
    {
      id: "standard",
      name: language === "en" ? "Standard" : "มาตรฐาน",
      price: 3000,
      duration: language === "en" ? "1 month" : "1 เดือน",
      color: "bg-orange-100 border-orange-300",
      features: [
        language === "en" ? "Homepage banner advertisement" : "แบนเนอร์หน้าแรก",
        language === "en" ? "1 sponsored article" : "บทความสปอนเซอร์ 1 ชิ้น",
        language === "en" ? "2 social media posts" : "โพสต์โซเชียลมีเดีย 2 ครั้ง",
        language === "en" ? "Featured in newsletter" : "แนะนำในจดหมายข่าว"
      ],
      icon: <Star className="h-8 w-8 text-orange-500" />
    },
    {
      id: "premium",
      name: language === "en" ? "Premium" : "พรีเมี่ยม",
      price: 5000,
      duration: language === "en" ? "1 month" : "1 เดือน",
      color: "bg-green-100 border-green-300",
      popular: true,
      features: [
        language === "en" ? "Premium position banner" : "แบนเนอร์ตำแหน่งเด่น",
        language === "en" ? "Promotional video" : "วิดีโอโปรโมทสั้น",
        language === "en" ? "4 social media posts" : "โพสต์โซเชียลมีเดีย 4 ครั้ง",
        language === "en" ? "Featured in tours section" : "แนะนำในส่วนทัวร์",
        language === "en" ? "Business highlight on homepage" : "ไฮไลท์ธุรกิจบนหน้าแรก"
      ],
      icon: <Star className="h-8 w-8 text-green-500" />
    },
  ];

  // Benefits data
  const benefits = [
    {
      title: language === "en" ? "Reach More Tourists" : "เข้าถึงนักท่องเที่ยวมากขึ้น",
      description: language === "en" ? "Get your business in front of thousands of visitors browsing our site monthly" : "แสดงธุรกิจของคุณต่อหน้านักท่องเที่ยวหลายพันคนที่เข้าชมเว็บไซต์ของเราทุกเดือน",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: language === "en" ? "Local Trust" : "ความเชื่อถือในท้องถิ่น",
      description: language === "en" ? "Being featured on our official tourism site increases your business credibility" : "การได้รับการแนะนำบนเว็บไซต์การท่องเที่ยวอย่างเป็นทางการของเราเพิ่มความน่าเชื่อถือให้กับธุรกิจของคุณ",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: language === "en" ? "Targeted Audience" : "กลุ่มเป้าหมายเฉพาะ",
      description: language === "en" ? "Connect with visitors specifically interested in Wang Sam Mo tourism" : "เชื่อมต่อกับผู้เข้าชมที่สนใจการท่องเที่ยววังสามหมอโดยเฉพาะ",
      icon: <CalendarDays className="h-6 w-6" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar sections={[
        { title: language === "en" ? "Home" : "หน้าแรก", link: "/" },
        { title: language === "en" ? "About" : "เกี่ยวกับ", link: "/#about" },
        { title: language === "en" ? "Places" : "สถานที่", link: "/#places" },
        { title: language === "en" ? "Festivals" : "เทศกาล", link: "/#festivals" },
        { title: language === "en" ? "Contact" : "ติดต่อ", link: "/#contact" },
        { title: language === "en" ? "Advertise" : "โฆษณา", link: "/advertise" },
      ]} />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {language === "en" ? "Advertise With Us" : "ติดต่อโฆษณากับเรา"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en" 
              ? "Boost your local business visibility by advertising on Wang Sam Mo's official tourism website."
              : "เพิ่มการมองเห็นธุรกิจท้องถิ่นของคุณด้วยการโฆษณาบนเว็บไซต์การท่องเที่ยวอย่างเป็นทางการของวังสามหมอ"}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Package Cards */}
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === "en" ? "Our Advertising Packages" : "แพคเกจโฆษณาของเรา"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`border-2 relative ${pkg.color} hover:shadow-lg transition-shadow`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium text-sm">
                  {language === "en" ? "Popular" : "ยอดนิยม"}
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-center">
                  {pkg.icon}
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">
                      {pkg.duration}
                    </span>
                    <div className="text-2xl font-bold">
                      {formatCurrency(pkg.price, language)}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl mt-4">{pkg.name}</CardTitle>
                <CardDescription>
                  {language === "en" 
                    ? `Perfect for ${pkg.id === "basic" ? "small" : pkg.id === "standard" ? "medium" : "established"} local businesses`
                    : `เหมาะสำหรับธุรกิจท้องถิ่น${pkg.id === "basic" ? "ขนาดเล็ก" : pkg.id === "standard" ? "ขนาดกลาง" : "ที่มั่นคง"}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={pkg.id === "premium" ? "default" : "outline"}>
                  {language === "en" ? "Select Package" : "เลือกแพคเกจ"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-bold mb-6">
            {language === "en" ? "Interested in advertising with us?" : "สนใจโฆษณากับเรา?"}
          </h2>
          <p className="mb-6">
            {language === "en" 
              ? "Fill out the form below and our team will get back to you with more information about our advertising packages."
              : "กรอกแบบฟอร์มด้านล่างและทีมงานของเราจะติดต่อกลับเพื่อให้ข้อมูลเพิ่มเติมเกี่ยวกับแพคเกจโฆษณาของเรา"}
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{language === "en" ? "Name" : "ชื่อ"}</Label>
                <Input id="name" placeholder={language === "en" ? "Your name" : "ชื่อของคุณ"} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business">{language === "en" ? "Business Name" : "ชื่อธุรกิจ"}</Label>
                <Input id="business" placeholder={language === "en" ? "Your business name" : "ชื่อธุรกิจของคุณ"} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">{language === "en" ? "Email" : "อีเมล"}</Label>
                <Input id="email" type="email" placeholder={language === "en" ? "your@email.com" : "อีเมลของคุณ"} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{language === "en" ? "Phone" : "เบอร์โทรศัพท์"}</Label>
                <Input id="phone" placeholder={language === "en" ? "Your phone number" : "เบอร์โทรศัพท์ของคุณ"} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="package">{language === "en" ? "Interested Package" : "แพคเกจที่สนใจ"}</Label>
              <select id="package" className="w-full border border-input bg-background px-3 py-2 text-sm rounded-md">
                <option value="">{language === "en" ? "Select a package" : "เลือกแพคเกจ"}</option>
                <option value="basic">{language === "en" ? "Basic - 1,500 THB/month" : "พื้นฐาน - 1,500 บาท/เดือน"}</option>
                <option value="standard">{language === "en" ? "Standard - 3,000 THB/month" : "มาตรฐาน - 3,000 บาท/เดือน"}</option>
                <option value="premium">{language === "en" ? "Premium - 5,000 THB/month" : "พรีเมี่ยม - 5,000 บาท/เดือน"}</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{language === "en" ? "Message" : "ข้อความ"}</Label>
              <Textarea 
                id="message" 
                placeholder={language === "en" ? "Tell us about your business and advertising goals" : "บอกเราเกี่ยวกับธุรกิจของคุณและเป้าหมายการโฆษณา"} 
                rows={4} 
              />
            </div>
            <Button type="submit" className="w-full">
              {language === "en" ? "Send Inquiry" : "ส่งคำขอ"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
