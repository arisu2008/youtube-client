import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const StyledHeader = styled.header
  position: fixed;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;

  .header-start {
    display: flex;

    svg {
      font-size: 20px;
      margin: 20px;
    }
    a {
      padding: 20px 10px;
    }
  }
  .header-center {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header-center input {
    display: none;
  }
  .header-center button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
    .header-end {
  display: flex;
  margin-right: 20px;
}
.header-end button {
  background: none;
  border: none;
  font-size: 20px;
}

const Header = () => {};
export default Header;
<header>
  <div className="header-start">
    <FaBars />{" "}
    <a href="/">
      <img src="{logo}" />
    </a>
  </div>
  <div className="header-center">
    <input type="text" placeholder="검색" />
    <button type="button">
      <FaMagnifyingGlass />
    </button>
  </div>
  <div className="header-end">
    <button type="button" onclick="location.href='/login'">
      로그인
    </button>
  </div>
</header>;
