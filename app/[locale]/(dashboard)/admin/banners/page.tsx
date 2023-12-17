import DashboardHeaderText from "../../_components/dashboard-header-text";
import BannerInput from "./_sections/banner-input";
import BannerUploadImages from "./_sections/banner-upload-images";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Banners" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <div>
          <BannerInput />
          <BannerUploadImages />
        </div>
      </div>
    </>
  );
}
