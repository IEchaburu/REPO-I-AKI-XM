"use client";

import React, { useEffect, useState } from "react";
import initMercadoPago from "../../node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago";

// import MsgAfterSubscription from "../ui/MsgAfertSubscription";

import Brand from "../../node_modules/@mercadopago/sdk-react/esm/bricks/brand/index";

import CardPayment from "@mercadopago/sdk-react/esm/bricks/cardPayment/index";

initMercadoPago("APP_USR-7fbf8573-cd4f-41ab-bdbd-f597d2b1ca28");

export default function PaymentPage() {
  const [preferenceId, setPreferenceId] = useState(null);
  const [storedToken, setStoredToken] = useState<string | null>(null);
  const [purchaseMessage, setPurchaseMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const API_URL = process.env.API_URL;

  useEffect(() => {
    let storedToken = localStorage.getItem("access_token");

    setStoredToken(storedToken);

    const handleSubscription = async () => {
      try {
        const response = await fetch(
          `${API_URL}/payments/create-subscription-preference`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        setPreferenceId(data.id);
      } catch (err) {
        console.error("Error fetching preferenceId:", err);
      }
    };

    handleSubscription();
  }, []);

  return (
    <div className="containerPayment">
      {storedToken ? (
        <>
          <h2>Este pago es administrado al 100% por Mercado Pago.</h2>
          <p>
            Por favor, introducí el email que esta asociado con tu cuenta, de
            otra manera no impactará el cambio en tu suscripción.
          </p>
          <br></br>
          <CardPayment
            initialization={{ amount: 2000 }} // Define el monto aquí
            onSubmit={async (param: any) => {
              try {
                const result = await fetch(`${API_URL}/payments/subscription`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    cardToken: param.token,
                    email: param.payer.email,
                  }),
                });

                if (result.ok) {
                  setPurchaseMessage("Gracias por tu compra");
                  localStorage.removeItem("userPro");
                  localStorage.setItem("userPro", "true");
                  setShowModal(true);
                } else {
                  setPurchaseMessage("Hubo un problema con tu compra");
                }
              } catch (error) {
                console.error("Error processing payment:", error);
                setPurchaseMessage("Hubo un problema con tu compra");
              }
            }}
          />

          {/* {purchaseMessage && <p>{purchaseMessage}</p>} */}

          {/* {showModal && (
            <MsgAfterSubscription message="¡Gracias por suscribirte a JoinJobs!" />
          )} */}

          {/* <MsgAfterSubscription message="¡Gracias por suscribirte a JoinJobs!" /> */}

          {/* <div className="containerWallet">
            {preferenceId && (
              <Wallet initialization={{ preferenceId: preferenceId }} />
            )}
          </div> */}

          <Brand />
        </>
      ) : (
        <>
          <div className="msgDescriptionJobs msgInPayment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM12 8v5"
                stroke="#0a0a0a"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M11.995 16h.009"
                stroke="#0a0a0a"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <h2>Usuario no logueado.</h2>
            <p>
              Para realizar el pago de la subscripción debes iniciar sesión con
              tu usuario o crearte uno.
            </p>

            <div className="registerAndLoginPayment">
              <a href="/register" className="buttonRegister">
                <p>Crear cuenta</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="6"
                    r="4"
                    stroke="#f2f2f2"
                    stroke-width="1.5"
                  ></circle>
                  <path
                    d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5"
                    stroke="#f2f2f2"
                    stroke-width="1.5"
                  ></path>
                  <circle
                    cx="18"
                    cy="16"
                    r="4"
                    stroke="#f2f2f2"
                    stroke-width="1.5"
                  ></circle>
                  <path
                    d="M18 14.6667V17.3333"
                    stroke="#f2f2f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.6665 16L19.3332 16"
                    stroke="#f2f2f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <a href="/login" className="buttonLogin">
                <p>Ingresar</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="9"
                    r="3"
                    stroke="#101010"
                    stroke-width="1.5"
                  ></circle>
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#101010"
                    stroke-width="1.5"
                  ></circle>
                  <path
                    d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}