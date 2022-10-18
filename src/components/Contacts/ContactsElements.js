import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 75% 10%;
  overflow: hidden;
  background-color: #f7eeff;

  .brand {
    background-color: #311566;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
    }
  }
  .contacts {
    padding-top: 10px;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.1rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      min-height: 1rem;
      cursor: pointer;
      width: 100%;
      border-radius: 0.4rem;
      padding: 0.4rem;
      display: flex;
      gap: 0.6rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 2.7rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .avatar {
      img {
        height: 2.7rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h3 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
