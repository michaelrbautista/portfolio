export const Section = ({
    header,
    body
}: {
    header: string,
    body: string
}) => {
  return (
    <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold">{header}</h1>
        <p className="">{body}</p>
    </div>
  )
}