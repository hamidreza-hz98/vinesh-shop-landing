"use client";

import Stepper, { Step } from "@/components/ui/reactbits/Stepper";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, forwardRef, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(({ value, onChange, ...props }, ref) => {
  return (
    <Input
      {...props}
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
});

const AuthPageWrapper = () => {
  const t = useTranslations();
  const locale = useLocale();

  const router = useRouter()

  const [activeStep, setActiveStep] = useState(1);
  const [phone, setPhone] = useState("");

  const [secondsLeft, setSecondsLeft] = useState(120); // 2 minutes
  const [timerFinished, setTimerFinished] = useState(false);

  const timerRef = React.useRef(null);

  const startTimer = (time = 120) => {
    if (timerRef.current) clearInterval(timerRef.current);

    setSecondsLeft(time);
    setTimerFinished(false);

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          setTimerFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (activeStep === 2) {
      startTimer(2);
      sendSMS();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeStep]);

      const sendSMS = () => {
        startTimer(5)
        console.log("SMS sent");
      };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleControlSteps = (step) => {
    setActiveStep(step);
    
    if (step === 2) {
      sendSMS();
    } else {
      console.log("HERE");
      
      const mockUser = {
      id: "123",
      name: "John Doe",
      phone: "+1234567890",
    };


    Cookies.set("user", JSON.stringify(mockUser), { expires: 365 });
    Cookies.set("token", "Bearer: jafhksdj0832nlejwfh9238sdf8023", { expires: 365 });
    console.log("Mock user cookie set:", mockUser);

    router.push("/profile")

    toast.success("Event has been created.")
    }
  };

  const handleValidateOTP = (code) => {
    console.log(code);
  };

  const checkUserExistence = (phoneNumber) => {
    return phoneNumber.endsWith("0") ? true : false;
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center p-4">
      <div className="w-full h-auto md:max-w-md rounded-2xl">
        <Stepper
          initialStep={1}
          onStepChange={(step) => handleControlSteps(step)}
          backButtonText={t("previous")}
          nextButtonText={t("next")}
        >
          {/* Step 1: Phone Input */}
          <Step>
            <div className="flex flex-col gap-2">
              <Label> {t("enter_phone_number")} </Label>
              <PhoneInput
                value={phone}
                defaultCountry="IR"
                onChange={setPhone}
                international
                inputComponent={CustomInput}
              />
            </div>
          </Step>

          {/* Step 2: OTP Input */}
          <Step>
            <div className="flex flex-col items-center gap-2">
              <Label className="mb-2">{t("enter_otp")}</Label>

              <InputOTP
                onFinish={(code) => handleValidateOTP(code)}
                maxLength={4}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>

              <div className="mt-2">
                {timerFinished ? (
                  <>
                    <span className="me-2 text-sm">{t("code_not_sent")}</span>

                    <Button size="sm" onClick={() => sendSMS(120)}>
                      {t("resend")}
                    </Button>
                  </>
                ) : (
                  <p className="text-muted-foreground text-sm">{t("can_resend_in") + formatTime(secondsLeft)}</p>
                )}
              </div>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default AuthPageWrapper;
