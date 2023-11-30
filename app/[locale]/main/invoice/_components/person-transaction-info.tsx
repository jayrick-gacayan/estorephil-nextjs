export default function PersonTransactionInfo({
  headerText,
  name,
  phoneNumber,
  email,
  address,
}: {
  headerText: string;
  name: string,
  phoneNumber: string;
  email: string;
  address: string
}) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold">{headerText} INFO</h4>
      <div className="block text-sm">
        <p className="text-primary font-semibold">{name}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <p>{address}</p>
      </div>
    </div>
  )
}