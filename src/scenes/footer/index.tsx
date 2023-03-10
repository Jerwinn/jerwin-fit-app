import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="md: mt-16 mt-0 basis-1/2">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            venenatis tortor, tristique egestas nibh. In efficitur orci sit amet
            risus pretium, eget congue odio posuere. Morbi massa felis, dapibus
            a ipsum eget, mollis congue orci. In tristique enim orci, at
            volutpat tortor tempor eu. Curabitur elit felis, dictum quis semper
            sit amet, ultricies nec sem. Sed volutpat feugiat bibendum.
          </p>
          <p>Jerwin all rights reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Massa orci senectus</p>
          <p> Ulam dkdo wjciasc</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">+1234567</p>
          <p className="my-5">eiofhweoif@outlook.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
