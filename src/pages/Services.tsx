import { useState } from "react";
import { Package, FileText, Heart, Truck, Building2, Home } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Country, COUNTRIES } from "@/lib/countries";
import { getServicesByCountry } from "@/lib/gccShippingServices";
import SEOHead from "@/components/SEOHead";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Services = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>();

  const handleCountryChange = (countryCode: string) => {
    const country = COUNTRIES.find((c) => c.code === countryCode);
    setSelectedCountry(country);
  };

  // Get shipping services for the selected country
  const countryServices = selectedCountry
    ? getServicesByCountry(selectedCountry.code)
    : [];

  return (
    <>
      <SEOHead
        title="خدمات الشحن في دول الخليج"
        description="اختر شركة الشحن المفضلة لديك من بين جميع شركات الشحن الكبرى في دول الخليج: أرامكس، دي إتش إل، فيديكس، يو بي إس، سمسا، زاجل، ناقل، والبريد الوطني"
        image="/og-aramex.jpg"
        type="website"
      />
      <div className="min-h-screen py-6" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header - Minimized */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            اختر خدمتك
          </h1>
          <p className="text-sm text-muted-foreground">
            ابدأ بتحديد الدولة، ثم اختر الخدمة المناسبة
          </p>
        </div>

        {/* Country Dropdown - Minimized */}
        <div className="mb-6">
          <div className="max-w-md mx-auto">
            <label className="block text-base font-semibold mb-2 text-center">
              اختر الدولة
            </label>
            <Select onValueChange={handleCountryChange}>
              <SelectTrigger className="w-full h-11 text-base bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-colors">
                <SelectValue placeholder="اختر دولة..." />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {COUNTRIES.map((country) => (
                  <SelectItem
                    key={country.code}
                    value={country.code}
                    className="text-base py-2 cursor-pointer hover:bg-accent"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{country.flag}</span>
                      <div className="text-right">
                        <div className="font-semibold text-sm">{country.nameAr}</div>
                        <div className="text-xs text-muted-foreground">
                          {country.name}
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services Grid - Minimized */}
        {selectedCountry ? (
          <div className="animate-fade-in">
            <h2 className="text-lg font-bold mb-4 text-center">
              شركات الشحن المتاحة في {selectedCountry.nameAr}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
              {countryServices.map((service) => {
                // Determine icon based on service key
                let icon = Package; // Default
                if (service.key.includes('post')) {
                  icon = Building2;
                } else if (service.key.includes('health')) {
                  icon = Heart;
                } else if (service.key.includes('logistics')) {
                  icon = Truck;
                } else if (service.key.includes('chalet') || service.key.includes('booking')) {
                  icon = Home;
                } else if (service.key.includes('invoice')) {
                  icon = FileText;
                }

                const serviceCard = {
                  title: service.name.split(' - ')[1] || service.name, // English name
                  titleAr: service.name.split(' - ')[0] || service.name, // Arabic name
                  description: service.description,
                  icon: icon,
                  href: `/create/${selectedCountry.code}/shipping`, // Fixed to go to shipping creation page
                  gradient: "var(--gradient-primary)",
                };

                return <ServiceCard key={service.key} {...serviceCard} />;
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <Package className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              الرجاء اختيار دولة لعرض الشركات المتاحة
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Services;
