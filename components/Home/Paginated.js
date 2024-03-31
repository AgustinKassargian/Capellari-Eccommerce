export default function Paginated({currentPage=1, totalPages=10}){
    const onPageChange = (page) =>{
    }
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
        <div className="flex justify-center mt-4">
          <ul className="flex space-x-2">
            {pages.map((page) => (
              <li key={page}>
                <button
                  className={`px-3 py-2 ${
                    currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  } rounded`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
}