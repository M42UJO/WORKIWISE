import logoWorkiwise from "../../../assets/img/logoWorkiwise.png";

function LoginLogo() {
    return (
        <>
            <div className="flex items-center space-x-2">
                {/* Logo Icon */}
                <img src={logoWorkiwise} alt="logo" className="w-72" />
            </div>
        </>
    )
}

export default LoginLogo