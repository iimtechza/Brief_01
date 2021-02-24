import React from "react";

const small = {
  height: "50px",
  width: "50px"
};
const medium = {
  height: "100px",
  width: "100px"
};
const large = {
  height: "150px",
  width: "150px"
};

const avatar = {
  small,
  medium,
  large
};

const banner = {
  small,
  medium,
  large
};

const image = {
  avatar,
  banner
};

// const _type = ({ type }) => {
//   return type === "avatar" ? avatar : banner;
// };
// const _size = ({ size }) => {
//   return size === "small"
//     ? small
//     : size === "medium"
//     ? medium
//     : size === "large"
//     ? large
//     : null;
// };

const Image = ({ url, type, size }) => (
  <div
    id={url}
    className=" Image flex flex-column h-100 w-100 h4 f5 fw6 black bg-cover bg-center br2 pointer shadow-2 hover-shadow-3 dim"
    style={{
      background: "url(" + url + ")",
      minHeight: "50px",
      minWidth: "50px",
      maxWidth: "50px"
    }}
  />
);
export default Image;
