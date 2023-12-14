import { motion } from "framer-motion";
import { VscError } from "react-icons/vsc";

export default function LoginFailed() {
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
                        background: "white",
                    }}
                    className="flex items-center justify-center"
                >
                    <VscError color="red" size={100} />

                </motion.div>
                <h1 className="mt-8 text-lg font-semibold text-slate-800">Login failed</h1>
            </motion.div>
        </>
    )
}