import { useSelector } from "react-redux"

import ReactPaginate from 'react-paginate';
import { useState } from "react";


const ListView = ({openDetail}) => {
  const store = useSelector((store) => store);
  const [itemOffset, setItemOffset] = useState(0);
 

  // sayfalama değerleri
  const itemsPerPage=10;
  // gösterilecek son itemi tespit etmek
  const endOffset = itemOffset + itemsPerPage;
  
//  belirli aralığı (örn:20-30) diziden alma
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  // topma sayfa sayısını hesaplıyor
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);
  // sayfa butonlarına tıklanınca çalışacak fonk.
  const handlePageClick = (event) => {
    // kaçıncı elemandan itibaren kesileceğini hesaplar
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;
   
    setItemOffset(newOffset);
  };
  return (
    <div className="list-page">
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr className="purple-text">
            <th >id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {currentItems && currentItems.map((fly,i) => (
            <tr key={i}>
              <td>{fly.id}</td>
              <td>{fly.code}</td>
              <td>{fly.lat}</td>
              <td>{fly.lan}</td>
              <td><button onClick={()=>openDetail(fly.id)}>Detay</button></td>

            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
        className="pagination"
      />

    </div>
  )
}

export default ListView