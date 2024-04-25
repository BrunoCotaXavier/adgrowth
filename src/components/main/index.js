import { AboutMe } from "../../screens/aboutMe";
import { Customers } from "../../screens/customers";

export const MainComponent = () => {
    return (
        <div>
            <AboutMe />
            <Customers />
            <div className="w-screen h-full bg-black pt-40">
                <img className="h-auto w-full" src="./images/bannerSocial.png" />
            </div>
        </div>
    );
}