
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import DeliverySection from "@/components/DeliverySection";
import QuickRepairModal from "@/components/QuickRepairModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  const [showQuickRepairModal, setShowQuickRepairModal] = useState(false);

  useEffect(() => {
    // Show the quick repair modal after 3 seconds
    const timer = setTimeout(() => {
      setShowQuickRepairModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle navigation clicks for quick repair
  useEffect(() => {
    const handleQuickRepairClick = (e: Event) => {
      e.preventDefault();
      setShowQuickRepairModal(true);
    };

    const quickRepairLinks = document.querySelectorAll('a[href="#conserto-rapido"]');
    quickRepairLinks.forEach(link => {
      link.addEventListener('click', handleQuickRepairClick);
    });

    return () => {
      quickRepairLinks.forEach(link => {
        link.removeEventListener('click', handleQuickRepairClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PhotoGallery />
      <DeliverySection />
      <Footer />
      
      <WhatsAppButton />
      
      <QuickRepairModal 
        isOpen={showQuickRepairModal}
        onClose={() => setShowQuickRepairModal(false)}
      />
    </div>
  );
};

export default Index;
