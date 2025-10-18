import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { localVehicles } from "../data/vehicleData"; 

const getEstimatedPayment = (price) => {
    const downPayment = price * 0.1;
    const loanAmount = price - downPayment;
    const monthlyRate = 0.059 / 12;
    const term = 60;
    const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    return payment;
};

const Tabs = ({ value, onValueChange, children }) => (
    <div className="tabs-container">
        {React.cloneElement(children, { value, onValueChange })}
    </div>
);

const TabsList = ({ value, onValueChange, children }) => (
    <div className="tabs-list">
        {React.Children.map(children, child =>
            React.cloneElement(child, { value, onValueChange })
        )}
    </div>
);

const TabsTrigger = ({ value, onValueChange, value: triggerValue, children }) => (
    <button
        className="tab-trigger"
        data-state={value === triggerValue ? 'active' : 'inactive'}
        onClick={() => onValueChange(triggerValue)}
    >
        {children}
    </button>
);

export default function Vehicles() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const vehicles = localVehicles;

    const filteredVehicles = useMemo(() => {
        if (selectedCategory === 'all') {
            return vehicles;
        }
        return vehicles.filter(v => v.category === selectedCategory);
    }, [vehicles, selectedCategory]);

    return (
        <div className="vehicles-page">
            <div className="vehicles-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="header-section"
                >
                    <h1 className="header-title">Browse Vehicles</h1>
                    <p className="header-subtitle">
                        Explore our lineup and see financing options
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                        <TabsList>
                            <TabsTrigger value="all">All Vehicles</TabsTrigger>
                            <TabsTrigger value="sedan">Sedans</TabsTrigger>
                            <TabsTrigger value="suv">SUVs</TabsTrigger>
                            <TabsTrigger value="truck">Trucks</TabsTrigger>
                            <TabsTrigger value="hybrid">Hybrids</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </motion.div>

                <div className="vehicles-grid">
                    {filteredVehicles.map((vehicle, index) => (
                        <motion.div
                            key={vehicle.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                            className="vehicle-card"
                        >
                            {vehicle.image_url && (
                                <div className="card-image-container">
                                    <img
                                        src={vehicle.image_url}
                                        alt={vehicle.model}
                                        className="card-image"
                                    />
                                    <div className="card-badge year-badge">
                                        {vehicle.year}
                                    </div>
                                </div>
                            )}

                            <div className="card-header">
                                <div className="card-header-top">
                                    <div>
                                        <h3 className="card-model">{vehicle.model}</h3>
                                        {vehicle.trim && (
                                            <p className="card-trim">{vehicle.trim}</p>
                                        )}
                                    </div>
                                    <span className="card-badge category-badge">
                                        {vehicle.category}
                                    </span>
                                </div>

                                <div className="card-details">
                                    {vehicle.mpg_city && (
                                        <div className="card-detail-item">
                                            <span>{vehicle.mpg_city}/{vehicle.mpg_highway} MPG</span>
                                        </div>
                                    )}
                                </div>

                                <div className="card-pricing">
                                    <p className="card-pricing-label">Starting MSRP</p>
                                    <p className="card-msrp">
                                        ${vehicle.msrp.toLocaleString()}
                                    </p>
                                    <p className="card-est-payment">
                                        Est. ${getEstimatedPayment(vehicle.msrp).toFixed(0)}/mo
                                    </p>
                                </div>
                            </div>

                            <div className="card-content">
                                <button className="calculate-button">
                                    Calculate Payments
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredVehicles.length === 0 && (
                    <div className="no-vehicles">
                        <p className="no-vehicles-text">No vehicles found in this category</p>
                    </div>
                )}
            </div>
        </div>
    );
}
