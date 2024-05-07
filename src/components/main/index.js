import { AboutMe } from "../../screens/aboutMe";
import { BrandStrategy } from "../../screens/brandStrategy";
import { Customers } from "../../screens/customers";
import { Filter } from "../../screens/filter";
import { Methodology } from "../../screens/methodology";
import { Offer } from "../../screens/offer";
import { SalesStrategy } from "../../screens/salesStrategy";
import { Social } from "../../screens/social";
import { FormSpree } from "../form";

export const MainComponent = () => {
    return (
        <div>
            <AboutMe />
            <Customers />
            <Social />
            <Methodology />
            <BrandStrategy />
            <SalesStrategy />
            <Filter />
            <Offer />
            <FormSpree/>
        </div>
    );
}