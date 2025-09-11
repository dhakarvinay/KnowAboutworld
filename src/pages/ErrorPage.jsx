import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Opps! Some Error was there</h1>

            {/* {error && <p>{error.data}<p/>} */}
            {error && <p>{error.status} {error.statusText}</p>}
            <NavLink to="/">
                <button> Go Home </button>
            </NavLink>
        </div>
    );
}
