import { CoinbaseCommerceButton } from "@iofate/react-coinbase-commerce";
// import CoinbaseCommerceButton from "react-coinbase-commerce";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";
import emailjs from "@emailjs/browser";

type Props = {
  isDisabled: boolean;
  email: string;
  name: string;
};

const PayCrypto = ({ isDisabled, email, name }: Props) => {
  const onChargeSuccess = (error: any) => {
    const serviceId = "service_32bqdom";
    const templateId = "template_jhjosml";
    const publicKey = "Q7dcW8jxf1kW3CLyO";

    const templateParams = {
      to_name: name,
      to_email: email,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // console.log(error, "charge failed", email);
  };

  return (
    <CoinbaseCommerceButton
      // onChargeSuccess={onChargeSuccess}
      //   styled={true}
      // checkoutId={"aa91af40-a731-4f07-8edc-97eefe9257d8"}
      checkoutId={"27fb1896-2175-4453-80b4-7c379958f6da"}
      style={{
        // backgroundColor: "#f1ba13",
        borderColor: "#f1ba13",
        borderWidth: "1px",
        borderRadius: "0.375rem",
        padding: "0.75rem 5.375rem",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.5 : 1,
      }}
      disabled={isDisabled}
    >
      PAY WITH CRYPTO
    </CoinbaseCommerceButton>
  );
};

export default PayCrypto;
