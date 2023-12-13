import BasicInformation from "./_sections/basic-information";
import BusinessInformation from "./_sections/business-information";
import Contacts from "./_sections/contacts";
import Documents from "./_sections/documents";
import ModalAgencyInformationForm from "./_sections/modal-agency-information-form";

export default function Page() {
    return (
        <>
            <div className="bg-[#f7f9fc] w-full px-[40px] py-[30px]">
                <BasicInformation />
                <BusinessInformation />
                <Contacts />
                <Documents />
            </div>
            <ModalAgencyInformationForm />
        </>
    )
}