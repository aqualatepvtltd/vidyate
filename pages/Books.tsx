
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BOOKS } from '../data/books';

const Books: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <SEO 
        title="Pharmacy Book Store | Curated Textbooks for B.Pharm & D.Pharm" 
        description="Explore our curated collection of essential pharmacy textbooks. From K.D. Tripathi to standard reference books, find everything you need for your academic success at student-friendly prices."
        keywords="Pharmacy Book Store, Buy B.Pharm Books, D.Pharm Textbooks, Medical Books India, Pharmacy Reference Books, GPAT Preparation Books, Online Book Store"
      />
      <div className="text-center mb-12 animate-subtle-fade">
        <span className="text-[#405cff] font-black text-[10px] tracking-[0.3em] uppercase mb-3 block">Store</span>
        <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Curated <span className="text-[#405cff]">Pharmacy</span> Library
        </h1>
        <p className="opacity-50 text-sm md:text-lg max-w-xl mx-auto font-medium" style={{ color: 'var(--text-main)' }}>
          Access the most recommended textbooks for pharmacy students, hand-picked by academic experts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {BOOKS.map((book) => (
          <div 
            key={book.id}
            className="glass group rounded-2xl border overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
            style={{ borderColor: 'var(--glass-border)' }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={book.image} 
                alt={book.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <Link 
                  to={`/books/${book.id}`}
                  className="w-full py-2.5 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-lg text-center block shadow-lg"
                >
                  Quick View
                </Link>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-black mb-3 tracking-tight leading-snug line-clamp-2" style={{ color: 'var(--text-main)' }}>
                {book.name}
              </h3>
              
              <div className="mt-auto flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-theme-muted line-through">₹{book.original_price}</span>
                    <span className="text-[10px] font-black text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded">
                      {Math.round(((book.original_price - book.selling_price) / book.original_price) * 100)}% OFF
                    </span>
                  </div>
                  <span className="text-xl font-black text-[#405cff]">₹{book.selling_price}</span>
                </div>
                <Link 
                  to={`/books/${book.id}`}
                  className="px-5 py-2 rounded-lg glass border border-transparent hover:border-[#405cff]/30 text-[10px] font-black uppercase tracking-widest transition-all"
                  style={{ color: 'var(--text-main)' }}
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Featured Banner */}
      <section className="mt-16 md:mt-24">
        <div className="glass p-8 md:p-12 rounded-3xl border relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#405cff]/10 blur-[80px] rounded-full"></div>
          <div className="max-w-lg relative z-10">
            <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter" style={{ color: 'var(--text-main)' }}>
              Looking for something specific?
            </h2>
            <p className="opacity-50 text-sm md:text-base font-medium mb-6 md:mb-8" style={{ color: 'var(--text-main)' }}>
              If you can't find a book, let us know and we'll try to source it for you at a discounted rate.
            </p>
            <Link to="/feedback" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#405cff] text-white rounded-xl font-black text-sm shadow-lg hover:-translate-y-1 transition-all">
              Request a Book
              <span className="material-symbols-rounded text-lg">local_library</span>
            </Link>
          </div>
          <div className="relative z-10 hidden md:block">
            <span className="material-symbols-rounded text-[8rem] opacity-10" style={{ color: 'var(--text-main)' }}>auto_stories</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
