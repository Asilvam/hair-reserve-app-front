import Image from "next/image";
import styles from "./styles/Home.module.css";
import React from "react";
import Navbar from "@/app/components/NavBar";

export default function Home() {
    const telefono = process.env.NEXT_PUBLIC_BARBERIA_TELEFONO;
    const nombreBarberia = process.env.NEXT_PUBLIC_BARBERSHOP_NAME;

    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <header className={styles.header}>
                <h1>Bienvenidos a {nombreBarberia}</h1>
                <p>Donde el estilo se encuentra con la tradición.</p>
            </header>
            <section className={styles.images}>
                <div>
                    <Image src="/barber.png"
                           width={283}
                           height={64}
                           alt="Barber"
                           priority={true}
                           className="custom-image-style"/>
                </div>
            </section>
            <section className={styles.aboutUs}>
                <h2>Sobre Nosotros</h2>
                <p>En {nombreBarberia}, nos enorgullecemos de ofrecer cortes de cabello y servicios de barbería de la
                    más alta calidad. Nuestra pasión por la barbería y el compromiso con nuestros clientes nos ha
                    convertido en un referente en la comunidad.</p>
            </section>
            <section className={styles.services}>
                <h2>Servicios</h2>
                <ul>
                    <li>Corte de Cabello</li>
                    <li>Afeitado Tradicional con Navaja</li>
                    <li>Arreglo de Barba</li>
                </ul>
            </section>
            <section className={styles.contact}>
                <h2>Contacto</h2>
                <p>📞 Teléfono: {telefono}</p>
            </section>
            <footer className={styles.footer}>
                <h2>Síguenos en Redes Sociales</h2>
                {/* Replace '#' with actual social media links */}
                <a href="#">Instagram</a>
            </footer>
        </div>
    );
}
