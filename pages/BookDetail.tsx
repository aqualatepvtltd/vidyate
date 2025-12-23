
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { BOOKS } from '../data/books';

const BookDetail: React.FC = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = BOOKS.find(b => b.id === bookId);

  if (!book) {
    return (
      <div className="p-20 text-center">
        <SEO title="Book Not Found" />
        Book not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
      <SEO 
        title={`${book.name} by ${book.writer}`} 
        description={book.description} 
        keywords={`Pharmacy Book, ${book.name}, ${book.writer}, Pharmacology, Pharmaceutics`}
      />
      <Link to="/books" className="inline-flex items-center gap-2 text-theme-muted hover:text-[#405cff] transition-all font-black text-[10px] uppercase tracking-widest mb-8 md:mb-12">
        <span className="material-symbols-rounded text-sm">arrow_back</span>
        Back to Library
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Book Image */}
        <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-10 border flex items-center justify-center relative group" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#405cff]/5 to-transparent opacity-50"></div>
          <img 
            src={book.image} 
            alt={book.name} 
            className="relative z-10 w-full max-w-xs rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Book Info */}
        <div className="flex flex-col">
          <span className="text-[#405cff] font-black text-[10px] tracking-[0.2em] uppercase mb-3 block">Book Detail</span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>
            {book.name}
          </h1>
          
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-10 h-10 rounded-full bg-[#405cff]/10 flex items-center justify-center text-[#405cff]">
              <span className="material-symbols-rounded text-xl">person</span>
            </div>
            <div>
              <p className="text-[9px] uppercase font-black tracking-widest opacity-40" style={{ color: 'var(--text-main)' }}>Author</p>
              <p className="font-bold text-base" style={{ color: 'var(--text-main)' }}>{book.writer}</p>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-black text-[#405cff] mb-6 md:mb-8">₹{book.price}</p>

          <div className="glass p-6 md:p-8 rounded-2xl border mb-8" style={{ borderColor: 'var(--glass-border)' }}>
            <h3 className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-3" style={{ color: 'var(--text-main)' }}>Description</h3>
            <p className="opacity-70 text-sm md:text-base leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
              {book.description}
            </p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="glass p-4 rounded-xl text-center border" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-[#10B981] mb-2 text-xl">auto_stories</span>
              <p className="text-[9px] uppercase font-black opacity-30">Pages</p>
              <p className="font-bold text-xs md:text-sm">{book.pages}</p>
            </div>
            <div className="glass p-4 rounded-xl text-center border" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-[#8B5CF6] mb-2 text-xl">book</span>
              <p className="text-[9px] uppercase font-black opacity-30">Format</p>
              <p className="font-bold text-xs md:text-sm">{book.format}</p>
            </div>
            <div className="glass p-4 rounded-xl text-center border" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-[#FF6B6B] mb-2 text-xl">apartment</span>
              <p className="text-[9px] uppercase font-black opacity-30">Publisher</p>
              <p className="font-bold text-[9px] truncate">{book.publisher}</p>
            </div>
          </div>

          <button 
            onClick={() => navigate(`/books/${bookId}/purchase`)}
            className="w-full py-4 md:py-5 rounded-2xl bg-[#405cff] text-white font-black text-lg hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            Buy Now
            <span className="material-symbols-rounded">shopping_bag</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
