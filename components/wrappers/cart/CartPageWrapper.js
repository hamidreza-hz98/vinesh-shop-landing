"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@/components/common/Container";
import { cartStepsTitles } from "@/constants/general";
import { useLocale, useTranslations } from "next-intl";
import CartOverview from "./components/CartOverview";
import CartAddressAndShipment from "./components/CartAddressAndShipment";
import CartFinalize from "./components/CartFinalize";
import CartPriceBox from "./components/CartPriceBox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PrimaryProductCard from "@/components/common/cards/PrimaryProductCard";
import { products, sampleCartItems } from "@/constants/product";

const stepComponents = [
  <CartOverview key={0} />,
  <CartAddressAndShipment key={1} />,
  <CartFinalize key={2} />,
];

const CartPageWrapper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const t = useTranslations();
  const locale = useLocale();

  const handleNext = () => {
    if (activeStep === cartStepsTitles.length - 1) {
      handleOpenPaymentGateway();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOpenPaymentGateway = () => {
    console.log("PAYMENT!");
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {cartStepsTitles.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label[locale]}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 mt-8">
            <div className="col-span-full sm:col-span-5"> {stepComponents[activeStep]} </div>

            <div className="col-span-full sm:col-span-2">
              <div className="w-full sticky top-4 max-h-[calc(100vh-4rem)] overflow-auto">

              <CartPriceBox />

              <div className="w-full flex flex-col gap-4 mt-4">
                <Button fullWidth onClick={handleNext}>
                  {activeStep === cartStepsTitles.length - 1
                    ? t("pay")
                    : t("next")}
                </Button>

                {activeStep !== 0 && (
                  <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                    {t("back")}
                  </Button>
                )}
              </div>
              </div>
            </div>

            {activeStep === 0 && (
              <div className="col-span-full mt-8">
                <div className="grid grid-cols-1 gap-4">

                <h2 className="text-2xl font-semibold"> { t("recently_viewed_products") } </h2>

                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="h-full w-full"
                >
                  <CarouselContent className="h-full">
                    {products?.map((product, index) => (
                      <CarouselItem
                      key={index}
                        className="h-full sm:basis-1/3 md:basis-1/4"
                      >
                        <PrimaryProductCard product={product} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                
                <h2 className="text-2xl font-semibold mt-4"> { t("related_products") } </h2>

                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="h-full w-full"
                >
                  <CarouselContent className="h-full">
                    {products?.map((product, index) => (
                      <CarouselItem
                        key={index}
                        className="h-full sm:basis-1/3 md:basis-1/4"
                      >
                        <PrimaryProductCard product={product} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
            </div>
              </div>
            )}
          </div>
        </React.Fragment>
      </Box>
    </Container>
  );
};

export default CartPageWrapper;
