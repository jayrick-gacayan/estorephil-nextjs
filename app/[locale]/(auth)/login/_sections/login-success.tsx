import { RequestStatus } from "@/models/result";
import { RootState } from "@/redux/store";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function LoginSuccess() {
    const { push } = useRouter()
    const loginStatus = useSelector((state: RootState) => state.login).requestStatus
    useEffect(() => {
        if (loginStatus == RequestStatus.SUCCESS)
            setTimeout(() => {
                push("/");
            }, 2000);
    }, [loginStatus])
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
                className="flex items-center justify-center"
            >
                <motion.div
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                    }}
                    className="flex items-center justify-center"
                >

                    <CiCircleCheck color="10D62E" size={100} />
                    {/* ✅ */}
                </motion.div>
                <h1 className="mt-8 text-lg font-semibold text-slate-800">Login Successful!</h1>
            </motion.div>
        </>
    )
}