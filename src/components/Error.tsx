const Error = ({ name, errors }: { name: string, errors: any }) => {
  return (
    <div>          {
      errors.password && <span>{errors?.[name]?.message?.toString()}</span>}
    </div>
  )
}

export default Error