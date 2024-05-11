import styled from "styled-components";

interface PaginationT {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const PaginationButtons = styled.button`
  height: 4rem;
  width: 4rem;
  background-color: var(--color-grey-50);
`;

function Pagination({ totalPosts, postsPerPage, setCurrentPage }: PaginationT) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <PaginationContainer>
      {pages.map((page, index) => {
        return (
          <PaginationButtons key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </PaginationButtons>
        );
      })}
    </PaginationContainer>
  );
}

export default Pagination;
