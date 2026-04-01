import Link from "next/link";
import Image from "next/image";
import { Droplets } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <Image
            src="/drpools-logo.png"
            alt="DR Pools"
            width={140}
            height={56}
            className="h-16 w-auto object-contain"
          />
        </div>

        <h1 className="text-8xl font-black text-secondary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Página no encontrada
        </h2>
        <p className="text-muted-foreground mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-lg hover:scale-105 transition-transform"
          >
            <Droplets className="w-5 h-5 mr-2" />
            Volver al Inicio
          </Link>
          <Link
            href="/mantenimiento-piscinas-tenerife"
            className="inline-flex items-center justify-center rounded-xl border-2 border-secondary px-8 py-4 font-semibold text-secondary hover:bg-secondary/10 transition-colors"
          >
            Ver Servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
