import BasicInformation from "./_sections/basic-information";
import BusinessInformation from "./_sections/business-information";
import Contacts from "./_sections/contacts";
import Documents from "./_sections/documents";
import ModalAgencyInformationForm from "./_sections/modal-agency-information-form";

export default function Page() {
    return (
        <>
            <div className="w-full p-8 space-y-8 divide-y-2 divide-tertiary-dark">
                <BasicInformation />
                <BusinessInformation />
                <Contacts />
                <Documents />
            </div>
            <ModalAgencyInformationForm />
        </>
    )
}