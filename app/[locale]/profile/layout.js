import Container from "@/components/common/Container";
import ProfileSidebar from "@/components/layout/profile/ProfileSidebar";
import React from "react";

const ProfieLayout = ({ children }) => {
  return (
    <Container className="flex flex-col md:flex-row items-start justify-start min-h-[80vh]">
      <ProfileSidebar />

      <div className="md:ms-4 w-full md:w-[80%]">{children}</div>
    </Container>
  );
};

export default ProfieLayout;
