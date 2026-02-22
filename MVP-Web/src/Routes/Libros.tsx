import React from 'react';
import InteractiveBook from '../Components/InteractiveBook';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const Libros: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow w-full overflow-x-hidden">
                <InteractiveBook />
            </main>
            <Footer />
        </div>
    );
};

export default Libros;
