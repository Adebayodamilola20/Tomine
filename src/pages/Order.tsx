import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import './OrderContact.css';

const Order = () => {
  const [activeTab, setActiveTab] = useState<'reservation' | 'order'>('reservation');
  const [cartItems] = useState([
    { id: 1, name: 'Truffle Mushroom Risotto', price: 28, quantity: 1 },
    { id: 2, name: 'Molten Lava Cake', price: 14, quantity: 2 },
  ]);

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="order-page pb-20">
      {/* Header */}
      <section className="page-header flex items-center justify-center text-center">
        <div className="page-header-overlay"></div>
        <div className="container relative z-10">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Dine With Us</h1>
          <p className="text-white text-xl opacity-90 max-w-2xl mx-auto">
            Book a table for an unforgettable evening, or order online for exquisite dining at home.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mt-12 pt-10">
        
        {/* Toggle Controls */}
        <div className="flex justify-center mb-12">
          <div className="toggle-switch bg-secondary p-2 rounded-full flex gap-2 w-full max-w-md relative">
            <button 
              className={`toggle-btn w-1/2 py-3 rounded-full font-heading font-semibold transition-all z-10 ${activeTab === 'reservation' ? 'text-white' : 'text-secondary'}`}
              onClick={() => setActiveTab('reservation')}
            >
              Table Reservation
            </button>
            <button 
              className={`toggle-btn w-1/2 py-3 rounded-full font-heading font-semibold transition-all z-10 ${activeTab === 'order' ? 'text-white' : 'text-secondary'}`}
              onClick={() => setActiveTab('order')}
            >
              Online Order
            </button>
            
            {/* Animated Background */}
            <motion.div 
              className="absolute top-2 bottom-2 bg-primary rounded-full z-0"
              initial={false}
              animate={{ 
                left: activeTab === 'reservation' ? '8px' : 'calc(50% + 4px)',
                width: 'calc(50% - 12px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'reservation' ? (
              <motion.div 
                key="reservation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 md:p-12 rounded-xl"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-heading mb-2">Reserve Your Table</h2>
                  <p className="text-secondary">Join us for a wonderful culinary experience.</p>
                </div>
                
                <form className="reservation-form" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-md mb-6">
                    <div className="form-group">
                      <label className="form-label block mb-2">Date</label>
                      <input type="date" className="form-input w-full p-4" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Time</label>
                      <input type="time" className="form-input w-full p-4" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-md mb-6">
                    <div className="form-group">
                      <label className="form-label block mb-2">Number of Guests</label>
                      <select className="form-input w-full p-4" required>
                        <option value="">Select Guests</option>
                        {[1,2,3,4,5,6,7,8,"8+"].map(n => <option key={n} value={n}>{n} People</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Special Occasion</label>
                      <select className="form-input w-full p-4">
                        <option value="">None</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="business">Business Dinner</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-md mb-8">
                    <div className="form-group">
                      <label className="form-label block mb-2">Full Name</label>
                      <input type="text" className="form-input w-full p-4" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Phone Number</label>
                      <input type="tel" className="form-input w-full p-4" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                  
                  <Button type="submit" size="lg" fullWidth>Confirm Reservation</Button>
                </form>
              </motion.div>

            ) : (
              
              <motion.div 
                key="order"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-xl"
              >
                {/* Cart Items */}
                <div className="glass-panel p-8 rounded-xl h-fit">
                  <h3 className="text-2xl font-heading mb-6 border-b pb-4">Your Cart</h3>
                  
                  <div className="cart-items flex-col gap-md mb-8">
                    {cartItems.map((item) => (
                      <div key={item.id} className="cart-item flex justify-between items-center py-4 border-b">
                        <div>
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          <p className="text-secondary">${item.price.toFixed(2)} x {item.quantity}</p>
                        </div>
                        <div className="font-heading font-bold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="cart-summary flex-col gap-2 border-t pt-6">
                    <div className="flex justify-between text-secondary">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-secondary">
                      <span>Tax (8%)</span>
                      <span>${(cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xl font-heading font-bold mt-4 pt-4 border-t border-gray-200">
                      <span>Total</span>
                      <span className="text-primary">${(cartTotal * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Details */}
                <div className="glass-panel p-8 rounded-xl">
                  <h3 className="text-2xl font-heading mb-6">Checkout Details</h3>
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group mb-4">
                      <label className="form-label block mb-2">Delivery Address</label>
                      <input type="text" className="form-input w-full p-3" placeholder="123 Main St..." required />
                    </div>
                    <div className="form-group mb-4">
                      <label className="form-label block mb-2">Contact Number</label>
                      <input type="tel" className="form-input w-full p-3" placeholder="(555) 123-4567" required />
                    </div>
                    <div className="form-group mb-8">
                      <label className="form-label block mb-2">Card Details</label>
                      <input type="text" className="form-input w-full p-3 mb-2" placeholder="Card Number" required />
                      <div className="flex gap-2">
                        <input type="text" className="form-input w-1/2 p-3" placeholder="MM/YY" required />
                        <input type="text" className="form-input w-1/2 p-3" placeholder="CVC" required />
                      </div>
                    </div>
                    <Button type="submit" size="lg" fullWidth>Place Order : ${(cartTotal * 1.08).toFixed(2)}</Button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Order;
