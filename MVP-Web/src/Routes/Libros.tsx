import React from 'react';
import InteractiveBook from '../Components/InteractiveBook';
import Header from '../Components/header'; // Asumiendo que hay un header global
import Footer from '../Components/Footer'; // Asumiendo que hay un footer global

const Libros: React.FC = () => {
    // Usaremos un PDF de ejemplo por defecto o uno local si tienes
    const samplePdfUrl = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-[#f3f4f6]">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-center mb-8 font-serif text-gray-800">
                        Lector Interactivo
                    </h1>
                    <InteractiveBook pdfUrl={samplePdfUrl} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Libros;
