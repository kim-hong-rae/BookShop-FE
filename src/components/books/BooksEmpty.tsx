import styled from "styled-components";
import { FaSmileWink } from "react-icons/fa";
import Title from "../common/Title";
import { Link } from "react-router-dom";

const BooksEmpty = () => {
  return (
    <BookEmptyStyle>
      <div className="icon">
        <FaSmileWink />
      </div>
      <Title size="large" color="secondary">
        검색결과가 없습니다.
      </Title>
      <p>
        <Link to="/books">전체 검색 결과 이동</Link>
      </p>
    </BookEmptyStyle>
  );
};

const BookEmptyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  gap: 12px;
  padding: 120px 0;

  .icon {
    svg {
      font-size: 4rem;
      fill: #ccc;
    }
  }
`;

export default BooksEmpty;
