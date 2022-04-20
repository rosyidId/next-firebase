const GetErrorMessage = (type) => {
    switch (type) {
        case 'minLength':
            return 'Jumlah minimal 8 karakter'

        case 'required':
        default:
            return 'Mohon di isi ya cuy'
    }
}
const Error = ({ error }) => {

    if (!error) {
        return (
            <></>
        )
    }
    const { type } = error
    const message = GetErrorMessage(type)

    return (
        <div className="alert-description text-sm text-red-600">
            {message}
        </div>
    )

}

export default Error;