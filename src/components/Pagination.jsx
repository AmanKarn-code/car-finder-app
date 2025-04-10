function Pagination({ carsPerPage, totalCars, currentPage, paginate }) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
      pageNumbers.push(i);
    }
    
    if (pageNumbers.length <= 1) return null;
    
    return (
      <nav className="pagination">
        <button 
          className="pagination-btn prev" 
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </button>
        
        <div className="page-numbers">
          {pageNumbers.map(number => (
            <button
              key={number}
              className={`page-number ${currentPage === number ? 'active' : ''}`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
        </div>
        
        <button 
          className="pagination-btn next" 
          onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
          disabled={currentPage === pageNumbers.length}
        >
          Next &raquo;
        </button>
      </nav>
    );
  }
  
  export default Pagination;
  
  