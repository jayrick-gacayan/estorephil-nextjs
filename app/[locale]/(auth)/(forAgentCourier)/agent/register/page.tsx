import AgentRegisterContent from "./_sections/agent-register-content";

export default function Page({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  return (<AgentRegisterContent token={searchParams.token} />)
}