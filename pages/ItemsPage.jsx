import { useState, useEffect } from 'react';
import { getProducts } from '../src/product/data-access-product/useGetProducts';
import ProductList from '../src/components/ProductList';
import { useNavigation } from '../src/components/useNavigation';
import BestProductList from '../src/components/BestProductList';

function Items() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleNewestClick = () => setOrderBy('recent');

  const handleBestClick = () => setOrderBy('favorite');

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getProducts(options);
    } catch (error) {
      setLoadingError(error);
      return; // 에러 핸들링 후 undefined 반환하고 함수 실행 종료
    } finally {
      setIsLoading(false);
    }
    const { list, totalCount } = result;
    const nextPageCount = totalCount / list.length;
    setItems(list);
    setPageCount(nextPageCount);
  };

  const handlePageChange = (nextPage) => {
    setPage(nextPage);
  };

  const PageNumCount = () => {
    for (let i = 1; i <= pageCount; i = i + 1) {
      return <button onClick={() => handlePageChange(i)}>{i}</button>;
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setKeyword(e.target['keyword'].value); // search 스테이트 값을 인풋의 값으로 변경
    handleLoad({ keyword });
  };

  const handleKeyDown = (e) => {
    if (e.target.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  useEffect(() => {
    handleLoad({ orderBy, keyword, page });
  }, [orderBy, keyword, page]);

  const sortedItems = items.sort((a, b) => b[orderBy] - a[orderBy]);

  const navigate = useNavigation();

  return (
    <div>
      <p>베스트 상품</p>
      <BestProductList items={items} />
      <p>판매 중인 상품</p>
      <form onSubmit={handleSearchSubmit}>
        <input name="keyword" onKeyDown={handleKeyDown} />
      </form>
      <button onClick={() => navigate('/additem')}>상품 등록하기</button>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>좋아요순</button>
      <ProductList items={sortedItems} />
      <button onClick={() => handlePageChange(page - 1)}>&lt;</button>
      <PageNumCount />
      <button onClick={() => handlePageChange(page + 1)}>&gt;</button>
    </div>
  );
}

export default Items;
