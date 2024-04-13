import { Children } from "react";
import RstrTabBar from "./RstrTabBar";

const RstrTabLayout = ({ Children }) => (
    <>
        <RstrTabBar />
        <main>{Children}</main>
    </>
);

export default RstrTabLayout;