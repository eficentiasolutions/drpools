import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookiesAccepted = localStorage.getItem("cookies-accepted");
        if (!cookiesAccepted) {
            // Show banner after a small delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookies-accepted", "true");
        setIsVisible(false);
    };

    const rejectCookies = () => {
        localStorage.setItem("cookies-accepted", "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-fade-in-up">
            <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-foreground/80 text-center sm:text-left">
                    <p>
                        Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
                        Si continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener más información en nuestra{" "}
                        <Link to="/cookies" className="text-primary hover:underline underline-offset-4 font-medium">
                            Política de Cookies
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                    <Button
                        variant="outline"
                        onClick={rejectCookies}
                        className="hover:bg-destructive/10 hover:text-destructive whitespace-nowrap"
                    >
                        Rechazar
                    </Button>
                    <Button
                        onClick={acceptCookies}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
                    >
                        Aceptar
                    </Button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
