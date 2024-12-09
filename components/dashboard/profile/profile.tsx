import { AppContainer, Spacer } from "@/components/global";
import { ProfileForm } from "./profile-form";
import { ProfileImage } from "./profile-image";

export const Profile = () => {
  return (
    <AppContainer className="">
      <Spacer small />
      <div className="px-4 space-y-6">
        <ProfileImage />
        <ProfileForm />
      </div>
      <Spacer />
    </AppContainer>
  );
};
