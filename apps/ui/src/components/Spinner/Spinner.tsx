import { ClimbingBoxLoader } from "react-spinners";

import classes from "./spinner.module.css";

export const Spinner = () => (
    <div className={classes.wrapper}>
        <ClimbingBoxLoader />
    </div>
)