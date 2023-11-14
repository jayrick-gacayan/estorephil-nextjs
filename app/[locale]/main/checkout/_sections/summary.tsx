import SummaryForm from "../_components/summary_form";
import { FaCcVisa, FaCcMastercard, } from "react-icons/fa"
import { SiAmericanexpress } from "react-icons/si"
export default function Summary() {
    const questions = [
        'WHAT PAYMENT METHODS CAN I USE?', 'HOW DO I USE A PROMO CODE?', 'WHERE TO GET PROMO CODE?', 'HOW SECURE IS MY PURCHASE?'
    ]
    return (
        <>
            <div className="flex flex-col justify-start p-4 border-l-2 border-[#eaeaea] h-full">
                <div>
                    <h1 className="text-[45px]">Summary</h1>
                    <div className="">
                        <SummaryForm />
                    </div>
                </div>
                <div className="mt-24">
                    <div className="py-4">
                        <div className="text-gray-500 text-[36px]">
                            SUPPORTED CARDS
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="/#"> <FaCcVisa color={"gray"} size={35} /> </a>
                            <a href="/#"><FaCcMastercard color={"gray"} size={35} /></a>
                            <a href="/#"><SiAmericanexpress color={"gray"} size={28} /></a>
                        </div>
                    </div>
                    <div>
                        <div className=" text-gray-500 text-[36px]">NEED HELP?</div>
                        {questions.map((question, index) =>
                            <div className="text-sm text-gray-500">
                                {question}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}