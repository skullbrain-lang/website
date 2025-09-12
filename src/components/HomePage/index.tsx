import Documentation from "./doc";
import Example from "./examples";
import Features from "./features";
import HomeHero from "./hero";


export default function Homepage() {
    return (
        <>
            <HomeHero />
            
            <Features /> 
            
            <Example /> 
            <Documentation />
        </>
    )
}