export const Section = ({
    header,
    body
}: {
    header: string,
    body: string
}) => {
  return (
    <div className="flex flex-col gap-1">
        <h1 className="text-sm font-semibold">{header}</h1>
        <p className="text-sm">{body}</p>
    </div>
  )
}