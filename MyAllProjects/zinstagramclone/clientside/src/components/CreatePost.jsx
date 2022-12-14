import React, { useState, useEffect } from "react";
import styled from "styled-components";
export default function CreatePost({ handleLikes, postId }) {
  return (
    <>
      <OuterContainer>
        <CreateContainer>
          <Heading>
            <h4>Create new post</h4>
            <button
              onClick={() => {
                handleLikes();
              }}
            >
              <img src="images/cross.svg" alt="" />
            </button>
          </Heading>
        </CreateContainer>
      </OuterContainer>
    </>
  );
}

const OuterContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateContainer = styled.div`
  width: 736px;
  max-height: calc(100% - 40px);
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Heading = styled.div`
  height: 42px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  position: relative;

  button img {
    position: absolute;
    top: 12px;
    right: 15px;
    height: 18px;
  }
`;
