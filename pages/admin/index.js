'use client'
import React, { useState } from 'react';

function AdminView() {
    const [selectedOption, setSelectedOption] = useState('Products');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='flex bg-slate-50 min-h-[80vh] font-main container max-w-screen-2xl text-black'>
            <div className='w-1/5 bg-blue-400 p-4 text-white'>
                <h2 className='text-xl font-bold'>Admin Panel</h2>
                <hr className='mb-4'/>
                <div className='space-y-2'>
                    <div
                        className={`cursor-pointer ${
                            selectedOption === 'Products' ? 'font-bold' : ''
                        }`}
                        onClick={() => handleOptionClick('Products')}
                    >
                        Products
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedOption === 'Sells & Refounds' ? 'font-bold' : ''
                        }`}
                        onClick={() => handleOptionClick('Sells & Refounds')}
                    >
                        Sells & Refounds
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedOption === 'Metrics' ? 'font-bold' : ''
                        }`}
                        onClick={() => handleOptionClick('Metrics')}
                    >
                        Metrics
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedOption === 'Users' ? 'font-bold' : ''
                        }`}
                        onClick={() => handleOptionClick('Users')}
                    >
                        Users
                    </div>
                </div>
            </div>
            <div className='flex-1 p-8'>
                <h1 className='mb-4'>{selectedOption}</h1>
                {/* Aquí puedes renderizar el componente correspondiente a la opción seleccionada */}
                {selectedOption === 'Products' && <ProductsView />}
                {selectedOption === 'Sells & Refounds' && <SellsRefoundsView />}
                {selectedOption === 'Metrics' && <MetricsView />}
                {selectedOption === 'Users' && <UsersView />}
            </div>
        </div>
    );
}

function ProductsView() {
    return <div>Products View</div>;
}

function SellsRefoundsView() {
    return <div>Sells & Refounds View</div>;
}

function MetricsView() {
    return <div>Metrics View</div>;
}

function UsersView() {
    return <div>Users View</div>;
}

export default AdminView;